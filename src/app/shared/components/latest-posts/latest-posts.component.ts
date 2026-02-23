import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostCardComponent } from './post-card/post-card.component';

@Component({
  standalone: true,
  selector: 'app-latest-posts',
  imports: [CommonModule, RouterModule, PostCardComponent],
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.scss']
})
export class LatestPostsComponent {

  posts = [
    {
      image: 'https://cdn2.fptshop.com.vn/unsafe/2023_9_15_638303942321093007_iphone-15-hong-1.jpg',
      category: 'Books',
      title: '10 Must-Read Books of the Year: Our Top Picks!',
      description: 'Dive into the world of cutting-edge technology...',
      postLink: '/singlepost'
    },
    {
      image: 'https://cdn2.fptshop.com.vn/unsafe/2023_9_15_638303942321093007_iphone-15-hong-1.jpg',
      category: 'Books',
      title: 'The Fascinating Realm of Science Fiction',
      description: 'Explore the intersection of technology...',
      postLink: '/singlepost'
    },
    {
      image: 'https://cdn2.fptshop.com.vn/unsafe/iphone_17_lavender_1_607c4326aa.png',
      category: 'Books',
      title: 'Finding Love in the Pages of a Book',
      description: 'Stay ahead of the curve with our insightful look...',
      postLink: '/singlepost'
    },
    {
      image: 'https://cdn2.fptshop.com.vn/unsafe/iphone_17_pro_cosmic_orange_1_12e8ea1358.png',
      category: 'Books',
      title: 'Reading for Mental Health: How Books Can Heal',
      description: 'In today’s remote work environment...',
      postLink: '/singlepost'
    }
  ];
}
