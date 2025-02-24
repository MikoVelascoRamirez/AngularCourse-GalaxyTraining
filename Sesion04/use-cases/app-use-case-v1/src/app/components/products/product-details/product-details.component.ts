import { Product } from './../../../interfaces/product';
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { StarImageComponent } from '../../component/star-image/star-image.component';

@Component({
  selector: 'app-product-details',
  imports: [StarImageComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  id?: number;
  product?: Product;

  // productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    console.log(this.activatedRoute.data);
    this.activatedRoute.data.subscribe((data: Product | any) => {
      console.log(data)
      this.product = data?.product;
      // const id = param['id'];
      // if (id) {
      //   this.id = id;
      //   // this.findProductById(id);
      // } else {
      //   const tmpId = Number(sessionStorage.getItem('id'));
      //   if (tmpId) {
      //     this.id = tmpId;
      //     // this.findProductById(this.id);
      //   }
      // }
    });
  }

  // findProductById(id: any) {
    // this.productService
    //   .getSingleProduct(id)
    //   .subscribe((product: Product) => this.product = product);
  // }

  round(num?:number){
    if(num){
      return Math.round(num)
    }
    return 0
  }
}
