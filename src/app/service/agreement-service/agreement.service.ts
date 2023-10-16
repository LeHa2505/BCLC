import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AgreementService {
  private httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${localStorage.getItem('id_token')}`,
    }),
  };
  
  constructor(private http: HttpClient) {}

  create(body: any): Observable<any> {
    return this.http.post(
      environment.BASE_API_URI.BASE_SALE_CONTRACT_API + 'create',
      body,
      this.httpOptions
    );
  }
}
