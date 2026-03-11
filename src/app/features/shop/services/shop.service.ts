import { Injectable, signal, computed } from '@angular/core';
import { ShopProduct } from '../models/shop-product.model';
import { ShopFilter } from '../models/shop-filter.model';
import { PaginationState } from '../models/pagination.model';
import { MOCK_PRODUCTS } from '../data/mock-products';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
//Để URL Sync Filter (SEO + Share link)
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){

    this.route.queryParams.subscribe(params => {

      this.filters.set({
        category: params['category'] || '',
        language: params['language'] || '',
        searchQuery: params['search'] || '',
        priceRange: params['price'] || ''
      });

      this.pagination.update(p => ({
        ...p,
        page: Number(params['page']) || 1
      }));

    });

  }
//Để URL Sync Filter (SEO + Share link)

  // ===== SOURCE STATE =====

  private products = signal<ShopProduct[]>(MOCK_PRODUCTS);

  filters = signal<ShopFilter>({});

  pagination = signal<PaginationState>({
    page: 1,
    pageSize: 8
  });

  // ===== FILTER LOGIC =====

  filteredProducts = computed(() => {

    let result = [...this.products()];
    const f = this.filters();

    // SEARCH
    if (f.searchQuery) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(f.searchQuery!.toLowerCase())
      );
    }

    // CATEGORY
    if (f.category) {
      result = result.filter(p => p.category === f.category);
    }

    // LANGUAGE
    if (f.language) {
      result = result.filter(p => p.language === f.language);
    }

    // PRICE RANGE
    if (f.priceRange) {
      if (f.priceRange === 'low') {
        result = result.filter(p => p.price < 200);
      }
      if (f.priceRange === 'medium') {
        result = result.filter(p => p.price >= 200 && p.price <= 300);
      }
      if (f.priceRange === 'high') {
        result = result.filter(p => p.price > 300);
      }
    }

    // SORT
    if (f.sort) {
      result.sort((a, b) => {
        switch (f.sort) {
          case 'priceAsc': return a.price - b.price;
          case 'priceDesc': return b.price - a.price;
          case 'nameAsc': return a.name.localeCompare(b.name);
          case 'nameDesc': return b.name.localeCompare(a.name);
          default: return 0;
        }
      });
    }

    return result;
  });

  // ===== PAGINATION =====

  paginatedProducts = computed(() => {

    const { page, pageSize } = this.pagination();
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return this.filteredProducts().slice(start, end);
  });

  totalPages = computed(() => {
    return Math.ceil(
      this.filteredProducts().length / this.pagination().pageSize
    );
  });
  updateURL(){

    const f = this.filters();

    const queryParams:any = {};

    if (f.category) queryParams.category = f.category;
    if (f.language) queryParams.language = f.language;
    if (f.priceRange) queryParams.price = f.priceRange;
    if (f.searchQuery) queryParams.search = f.searchQuery;

    queryParams.page = this.pagination().page;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams
    });

  }
  // ===== ACTIONS =====

  // updateFilter(partial: Partial<ShopFilter>) {
  //   this.filters.update(current => ({
  //     ...current,
  //     ...partial
  //   }));
  //
  //   // Reset page khi filter thay đổi
  //   this.setPage(1);
  // }
  updateFilter(newFilter: Partial<ShopFilter>) {

    this.filters.update(current => {

      const updated = { ...current };

      Object.keys(newFilter).forEach(key => {

        const k = key as keyof ShopFilter;

        if (updated[k] === newFilter[k]) {

          delete updated[k];   // remove filter

        } else {

          updated[k] = newFilter[k] as any;

        }

      });

      return updated;

    });

    this.updateURL();

  }

  // setPage(page: number) {
  //   this.pagination.update(p => ({
  //     ...p,
  //     page
  //   }));
  // }
  setPage(page:number){

    this.pagination.update(p => ({
      ...p,
      page
    }));

    this.router.navigate([], {
      relativeTo:this.route,
      queryParams:{ page }
    });

  }

  resetFilters(){

    this.filters.set({});

    this.pagination.update(p => ({
      ...p,
      page:1
    }));

    this.router.navigate([],{
      relativeTo:this.route,
      queryParams:{}
    });

  }

}
