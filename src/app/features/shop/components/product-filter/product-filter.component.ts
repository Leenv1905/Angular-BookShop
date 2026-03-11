import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShopService } from '../../services/shop.service';

@Component({
  standalone: true,
  selector: 'app-product-filter',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {

  shopService = inject(ShopService);
  searchTimeout: any;
  searchQuery = '';
  sort = '';

  updateSearch() {

    clearTimeout(this.searchTimeout);

    this.searchTimeout = setTimeout(() => {

      this.shopService.updateFilter({
        searchQuery: this.searchQuery
      });

    }, 300);

  }

  updateSort() {
    this.shopService.updateFilter({
      sort: this.sort as any
    });
  }

}
