import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./products/components/product-add/product-add.component').then(
        (c) => c.ProductAddComponent
      )
  },
  {
    path: 'product-add/:id',
    loadComponent: () =>
      import('./products/components/product-add/product-add.component').then(
        (c) => c.ProductAddComponent
      )
  },
];
