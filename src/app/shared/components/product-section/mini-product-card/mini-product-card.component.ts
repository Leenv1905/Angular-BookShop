import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-mini-product-card',
  imports: [CommonModule],
  templateUrl: './mini-product-card.component.html',
  styleUrls: ['./mini-product-card.component.scss']
})
export class MiniProductCardComponent {

  @Input() id!: number;
  @Input() image!: string;
  @Input() title!: string;
  @Input() author!: string;
  @Input() rating!: number;
  @Input() price!: number;
  @Input() originalPrice?: number;

  constructor(private router: Router) {}

  navigate() {
    if (this.id) {
      this.router.navigate(['/productdetail', this.id]);
    }
  }
}
