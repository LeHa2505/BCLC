import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  constructor(private apiService: ApiService, private http: HttpClient) {}

  // get(): Observable<any> {
  //   return this.apiService.get('https://6385e9a5beaa6458266ce8e3.mockapi.io/api/dashboard', 'get-order-list');
  // }

  getArray(): Observable<any> {
    return this.http.get("https://6385e9a5beaa6458266ce8e3.mockapi.io/api/shipping_order");
  }
}

