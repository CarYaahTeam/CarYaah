import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  ppp(data: any) {
    return this.http.post('http://localhost:3000/payment', data);
  }
}
