import { Component } from '@angular/core';
import { GalleryBookComponent } from '../../shared/components/gallery-book/gallery-book.component';
import { CompanyServicesComponent } from '../../shared/components/company-services/company-services.component';
import { BestSellingItemsComponent } from '../../shared/components/best-selling-items/best-selling-items.component';
import { LimitedOfferComponent } from '../../shared/components/limited-offer/limited-offer.component';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [
    GalleryBookComponent,
    CompanyServicesComponent,
    BestSellingItemsComponent,
    LimitedOfferComponent
    // các section khác sẽ import sau
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {}
