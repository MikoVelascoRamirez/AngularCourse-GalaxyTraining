import { Category } from './../../../categories/interfaces/category';
import { Component, OnInit, inject } from '@angular/core';
import { CategoryService } from '../../../categories/services/category.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { toast, NgxSonnerToaster } from 'ngx-sonner';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/product';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-product-add',
  imports: [AsyncPipe, ReactiveFormsModule, NgxSonnerToaster],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})

export class ProductAddComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  categories$?: Observable<Category[]>;
  productForm!: FormGroup;
  product!: Product;
  iProduct!: IProduct;
  protected readonly toastMessage = toast;

  // Services
  categoryService = inject(CategoryService);
  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.loadCategories();
    this.createFormProduct();
    console.log(this.activatedRoute);
    this.activatedRoute.params.subscribe((params: any) => {
      // console.log(params)
      const id = params['id'];
      this.getProductById(+id);
    });
  }

  saveProduct() {
    const title = this.pf['title'].value;
    const price = this.pf['price'].value;

    if (price <= 0) {
      return;
    }

    const description = this.pf['description'].value;
    const categoryId = this.pf['categoryId'].value;

    // By Class
    // this.product = new Product(
    //   title,
    //   price,
    //   description,
    //   +categoryId,
    //   ['https://i.imgur.com/QkIa5tT.jpeg']
    // );

    // this.productService.addNew(this.product).subscribe((res) => {
    //   console.log(res);
    // });

    // By interface
    this.iProduct = {
      title,
      price,
      description,
      categoryId,
      images: ['https://i.imgur.com/QkIa5tT.jpeg']
    }

    this.productService.addNewInterface(this.iProduct).subscribe({
      next: () => {
        this.toastMessage.success('Product created!');
      },
      error: (err) => {
        this.toastMessage.error('Error occurs', err)
      }
    });

  }

  loadCategories() {
    this.categories$ = this.categoryService.getAll();
  }

  getProductById(id: number) {
    this.productService.findById(id).subscribe({
      next: (res) => {
        this.fillForm(res);
      },
      error: (err) => {
        this.toastMessage.error('Error occurs', err)
      },
    });
  }

  fillForm(product: any) {
    this.pf['title'].setValue(product.title);
    this.pf['price'].setValue(product.price);
    this.pf['description'].setValue(product.description);
    this.pf['categoryId'].setValue(product.category.id);
  }

  createFormProduct() {
    this.productForm = this.formBuilder.group({
      title: ['Something' + Date.now()],
      price: ['13.99'],
      description: ['A description of the new product'],
      categoryId: ['5'],
    });
  }

  get pf(): { [key: string]: AbstractControl } {
    return this.productForm.controls;
  }
}
