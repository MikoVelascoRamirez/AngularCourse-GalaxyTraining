import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string;
  http = inject(HttpClient);

  constructor() {
    this.url = `${environment.URL_BASE}/api/v1/products`;
  }

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }

  findById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  addNew(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.url}`, product)
  }

  addNewInterface(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(`${this.url}`, product)
  }

  addInterface(iProduct: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(`${this.url}`, iProduct)
  }
}
