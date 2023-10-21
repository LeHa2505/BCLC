import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${localStorage.getItem('id_token')}`,
    }),
  };

  constructor(private http: HttpClient) {}

  create(body: any): Observable<any> {
    return this.http.post(
      environment.BASE_API_URI.BASE_INVOICE_API + `/create`,
      body,
      this.httpOptions
    );
  }

  detail(id: String): Observable<any> {
    return this.http.get(environment.BASE_API_URI.BASE_INVOICE_API + `/${id}`);
  }

  approve(id: String, body: any): Observable<any> {
    return this.http.patch(
      environment.BASE_API_URI.BASE_INVOICE_API + `/${id}/approve`,
      body,
      this.httpOptions
    );
  }

  reject(id: String, body: any): Observable<any> {
    return this.http.patch(
      environment.BASE_API_URI.BASE_INVOICE_API + `/${id}/reject`,
      body,
      this.httpOptions
    );
  }

  
}
