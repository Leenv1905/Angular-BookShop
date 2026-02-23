import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewCardComponent } from './review-card/review-card.component';

@Component({
  standalone: true,
  selector: 'app-customer-reviews-slider',
  imports: [CommonModule, ReviewCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './customer-reviews-slider.component.html',
  styleUrls: ['./customer-reviews-slider.component.scss']
})
export class CustomerReviewsSliderComponent {

  reviews = [
    {
      text: 'I find this book very good and meaningful...',
      name: 'Emma Chamberlin'
    },
    {
      text: "As an avid reader, I'm always on the lookout...",
      name: 'Thomas John'
    },
    {
      text: 'I ordered a few books online from this store...',
      name: 'Kevin Bryan'
    },
    {
      text: 'I stumbled upon this book store while searching...',
      name: 'Stevin'
    }
  ];
}
