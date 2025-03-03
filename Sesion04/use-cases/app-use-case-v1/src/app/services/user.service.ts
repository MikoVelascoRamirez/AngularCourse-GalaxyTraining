import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private api = `${environment.API_BASE}/users`

    constructor(private httpClient: HttpClient) { }
}
