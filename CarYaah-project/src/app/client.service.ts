import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { } from './auth/register/register.component'
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  // addcar

  constructor(private http: HttpClient) { }

  register() {
    // const url = "http://localhost:3000/register"
    // console.log(this.regForm.value);
    // this.http.post(url, this.regForm.value).subscribe((data) => {
    //   console.log(data);
    // })

  }
}
