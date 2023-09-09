import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;

  constructor(private http: HttpClient) {}

  get(element: any, path: string): Observable<any> {
    return this.http
      .get('https://6385e9a5beaa6458266ce8e3.mockapi.io/api/shipping_order');
  }

  // post(element: any, path: string): Observable<any> {
  //   if (element == undefined || element == '') {
  //     element = {};
  //   }

  //   return this.http
  //     .post('https://6385e9a5beaa6458266ce8e3.mockapi.io/api/dashboard');
  // }
  
}
