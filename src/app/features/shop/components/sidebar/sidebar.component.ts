import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopService } from '../../services/shop.service';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  shopService = inject(ShopService);

  categories = [
    'Programming',
    'Literature',
    'Science',
    'Romance'
  ];

  languages = [
    'English',
    'French',
    'Russian',
    'Vietnamese'
  ];

  priceRanges = [
    { label: 'Under $200', value: 'low' },
    { label: '$200 - $300', value: 'medium' },
    { label: 'Above $300', value: 'high' }
  ];

  selectCategory(category: string) {
    this.shopService.updateFilter({ category });
  }

  selectLanguage(language: string) {
    this.shopService.updateFilter({ language });
  }

  selectPrice(priceRange: string) {
    this.shopService.updateFilter({ priceRange: priceRange as any });
  }

  clearFilters() {
    this.shopService.resetFilters();
  }

}
