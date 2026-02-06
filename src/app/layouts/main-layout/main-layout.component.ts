import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { FooterBottomComponent } from '../../shared/components/footer/footer-bottom.component';

@Component({
  standalone: true,
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    HeaderComponent,
    FooterComponent,
    FooterBottomComponent
  ],
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent {}
