import type { ResolveFn } from '@angular/router';
import { of } from 'rxjs';
import { ProductService } from '../services/product.service';
import { inject } from '@angular/core';
import { Product } from '../interfaces/product';

export const productResolver: ResolveFn<Product | any> = (route) => {
  const productId = route.paramMap.get('id');
  if(!productId){
    return of(undefined);
  }

  const productService = inject(ProductService);
  const product = productService.getSingleProduct(+productId);
  console.log(product);
  return product;
};
