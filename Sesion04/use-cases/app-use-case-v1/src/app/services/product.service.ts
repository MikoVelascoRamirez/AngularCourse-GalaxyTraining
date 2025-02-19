import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api = `${environment.API_BASE}/products`

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.api);
  }

  getSingleProduct(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.api}/${id}`);
  }
}
