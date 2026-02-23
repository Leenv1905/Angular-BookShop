import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-categories-section',
  imports: [CommonModule, RouterModule],
  templateUrl: './categories-section.component.html',
  styleUrls: ['./categories-section.component.scss']
})
export class CategoriesSectionComponent {

  categories = [
    { title: 'Romance', image: 'https://cdn2.fptshop.com.vn/unsafe/iphone_17_lavender_1_607c4326aa.png', link: '/shop' },
    { title: 'Language', image: 'https://cdn2.fptshop.com.vn/unsafe/iphone_17_pro_cosmic_orange_1_12e8ea1358.png', link: '/shop' },
    { title: 'Literature', image: 'https://cdn2.fptshop.com.vn/unsafe/2023_9_15_638303942321093007_iphone-15-hong-1.jpg', link: '/shop' },
  ];
}
