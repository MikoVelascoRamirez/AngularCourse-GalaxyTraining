import { Category } from './../interfaces/category';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private url: string;
  http = inject(HttpClient);

  constructor() {
    this.url = `${environment.URL_BASE}/api/v1/categories`;
  }

  getAll(): Observable<Category[]>{
    return this.http.get<Category[]>(this.url);
  }

  getOne(categoryId: number): Observable<Category>{
    return this.http.get<Category>(this.url);
  }
}
