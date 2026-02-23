import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductGroupComponent } from './product-group/product-group.component';

@Component({
  standalone: true,
  selector: 'app-product-section',
  imports: [CommonModule, ProductGroupComponent],
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent implements OnInit {

  groups: any[] = [];
  error: string | null = null;

  ngOnInit(): void {
    this.loadMockProducts();
  }

  private loadMockProducts() {
    try {
      const mockProducts = Array.from({ length: 12 }).map((_, i) => ({
        id: i + 1,
        image: '/assets/demo/book.png',
        title: `Book ${i + 1}`,
        author: 'John Doe',
        rating: 5,
        price: 100 + i * 10,
        originalPrice: i % 2 === 0 ? 150 : null,
        language: ['Tiếng Việt', 'Tiếng Nga', 'Tiếng Anh'][i % 3]
      }));

      this.groups = [
        {
          title: 'Vietnamese',
          products: mockProducts.filter(p => p.language === 'Tiếng Việt').slice(0,3)
        },
        {
          title: 'Russian',
          products: mockProducts.filter(p => p.language === 'Tiếng Nga').slice(0,3)
        },
        {
          title: 'French',
          products: mockProducts.slice(0,3)
        },
        {
          title: 'English',
          products: mockProducts.filter(p => p.language === 'Tiếng Anh').slice(0,3)
        }
      ];

    } catch {
      this.error = 'Failed to load products';
    }
  }
}
