import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  regClient(data: object) {
    console.log('hi', data)
    const url = "http://localhost:3000/register/client"
    this.http.post(url, data).subscribe((data) => {
      console.log('there', data);
    })
  }

  login(data: object) {
    const url = "http://localhost:3000/login"
    this.http.post(url, data).subscribe((data) => {
      console.log('login', data);
    })
  }
}
