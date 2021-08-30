import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  regOwner(data: object) {
    console.log('hi', data)
    const url = "http://localhost:3000/owner/signup"
    this.http.post(url, data).subscribe((data) => {
      console.log('there', data);
    })
  }
  logOwner(data: object) {
    const url = "http://localhost:3000/owner/signin"
    this.http.post(url, data).subscribe((data) => {
      console.log('login', data);
    })

  }
}
