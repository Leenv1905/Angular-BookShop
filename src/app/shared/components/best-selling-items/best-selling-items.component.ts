import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Product } from '../../models/product.model';
import { ProductSliderComponent } from '../product-slider/product-slider.component';

@Component({
  standalone: true,
  selector: 'app-best-selling-items',
  imports: [
    CommonModule,
    RouterModule,
    ProductSliderComponent
  ],
  templateUrl: './best-selling-items.component.html',
  styleUrls: ['./best-selling-items.component.scss']
})
export class BestSellingItemsComponent implements OnInit {

  products: Product[] = [];
  error: string | null = null;

  ngOnInit(): void {
    this.loadMockProducts();
  }

  private loadMockProducts() {
    try {
      const mock = Array.from({ length: 8 }).map((_, i) => ({
        id: i + 1,
        name: `Featured Book ${i + 1}`,
        author: 'John Doe',
        price: 200 + i * 10,
        salePrice: i % 2 === 0 ? 150 + i * 10 : undefined,
        rating: 5,
        discount: i % 2 === 0 ? '25% off' : undefined,
        image: '/assets/demo/book.png'
      }));

      this.products = mock;
    } catch (e) {
      this.error = 'Failed to load products.';
    }
  }
}
