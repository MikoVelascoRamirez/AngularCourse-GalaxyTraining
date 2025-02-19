import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';
import { CommonModule, CurrencyPipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { SubstrPipe } from '../../../pipes/substr.pipe';
import { CategoryImageComponent } from '../../component/category-image/category-image.component';
import { StarImageComponent } from '../../component/star-image/star-image.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [UpperCasePipe, CurrencyPipe, SubstrPipe, CategoryImageComponent, StarImageComponent, CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  private productoService = inject(ProductService);
  private routerService = inject(Router)

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts(): void {
    this.productoService
      .getAllProducts()
      .subscribe((productsList: Product[]) => {
        this.products = productsList;
        console.log(this.products);
      });
  }

  round(num:number){
    return Math.round(num)
  }

  verDetalle(id: number){
    if(id){
      sessionStorage.setItem('id', id+'')
    }
    this.routerService.navigate(['/product-details']);
  }
}
