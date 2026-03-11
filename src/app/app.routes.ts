// app.routes.ts
import {Routes} from '@angular/router';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {HomeLayoutComponent} from './layouts/home/home-layout.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';

export const routes: Routes = [

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.routes')
            .then(m => m.DASHBOARD_ROUTES)
      }
    ]
  },

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./features/books/pages/book-list.page') .then(m => m.BookListPage) },
      { path: 'home', loadComponent: () => import('./features/home/home.page') .then(m => m.HomePage) },
      { path: 'shop', loadComponent: () => import('./features/shop/pages/shop.page') .then(m => m.ShopPage)}

    ]
  },
  // {
  //   path: '',
  //   component: HomeLayoutComponent,
  //   children: [
  //     { path: '', redirectTo: 'books', pathMatch: 'full' },
  //     {
  //       path: 'books',
  //       loadChildren: () =>
  //         import('./features/books/book.routes')
  //           .then(m => m.BOOK_ROUTES)
  //     }
  //   ]
  // }

];


// import { Routes } from '@angular/router';
// import {HomeLayoutComponent} from './layouts/home/home-layout.component';
// import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
//
// // app.routes.ts
// export const routes: Routes = [
//
//   // ===== USER =====
//   {
//     path: '',
//     component: HomeLayoutComponent,
//     children: [
//       { path: '', redirectTo: 'books', pathMatch: 'full' },
//       {
//         path: 'books',
//         loadChildren: () =>
//           import('./features/books/book.routes')
//             .then(m => m.BOOK_ROUTES)
//       }
//     ]
//   },
//
//   // ===== ADMIN =====
//   {
//     path: 'admin',
//     component: AdminLayoutComponent,
//     // canActivate: [adminGuard], // bật sau
//     children: [
//       {
//         path: 'dashboard',
//         loadChildren: () =>
//           import('./features/dashboard/dashboard.routes')
//             .then(m => m.DASHBOARD_ROUTES)
//       },
//       {
//         path: 'books',
//         loadChildren: () =>
//           import('./features/books/book.routes')
//             .then(m => m.BOOK_ROUTES)
//       }
//     ]
//   }
// ];
