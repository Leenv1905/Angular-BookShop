import { Component, inject, ChangeDetectionStrategy  } from '@angular/core';
// ChangeDetectionStrategy.OnPush
// Angular chỉ re-render khi:
//   input thay đổi
//   signal thay đổi
import { CommonModule } from '@angular/common';

import { ShopService } from '../../services/shop.service';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { PaginationComponent } from '../pagination/pagination.component';

// NGHIÊN CỨU ChangeDetectionStrategy.OnPush ĐỂ TỐI ƯU HIỆU SUẤT CHO DANH SÁCH SẢN PHẨM
// (nếu cần thiết, có thể áp dụng sau khi hoàn thiện chức năng cơ bản)
// NGHIÊN CỨU THÊM Virtual Scroll (Cho 1000+ Products hoặc hơn)
@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-product-list',
  imports: [
    CommonModule,
    ProductCardComponent,
    PaginationComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  shopService = inject(ShopService);

  products = this.shopService.paginatedProducts;
  totalPages = this.shopService.totalPages;
  pagination = this.shopService.pagination;

  trackById(index: number, product: any) {
    return product.id;
  }

}
