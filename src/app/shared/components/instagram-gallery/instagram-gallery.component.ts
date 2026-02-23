import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstagramItemComponent } from './instagram-item/instagram-item.component';

@Component({
  standalone: true,
  selector: 'app-instagram-gallery',
  imports: [CommonModule, InstagramItemComponent],
  templateUrl: './instagram-gallery.component.html',
  styleUrls: ['./instagram-gallery.component.scss']
})
export class InstagramGalleryComponent {

  instagramItems = [
    { image: 'https://cdn2.fptshop.com.vn/unsafe/2023_9_15_638303942321093007_iphone-15-hong-1.jpg', link: '#' },
    { image: 'https://cdn2.fptshop.com.vn/unsafe/2023_9_15_638303942321093007_iphone-15-hong-1.jpg', link: '#' },
    { image: 'https://cdn2.fptshop.com.vn/unsafe/2023_9_15_638303942321093007_iphone-15-hong-1.jpg', link: '#' },
    { image: 'https://cdn2.fptshop.com.vn/unsafe/2023_9_15_638303942321093007_iphone-15-hong-1.jpg', link: '#' },
    { image: 'https://cdn2.fptshop.com.vn/unsafe/2023_9_15_638303942321093007_iphone-15-hong-1.jpg', link: '#' },
    { image: 'https://cdn2.fptshop.com.vn/unsafe/2023_9_15_638303942321093007_iphone-15-hong-1.jpg', link: '#' }
  ];

}
