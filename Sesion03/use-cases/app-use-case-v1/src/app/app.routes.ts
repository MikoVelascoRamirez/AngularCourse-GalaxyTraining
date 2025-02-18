import { Routes } from '@angular/router';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CategoryListComponent } from './components/categories/category-list/category-list.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent
  },
  {
    path: 'category-list',
    component: CategoryListComponent
  }

];
