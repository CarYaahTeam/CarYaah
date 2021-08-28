import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  reg(data: object) {
    console.log('hi', data)
    const url = "http://localhost:3000/register"
    this.http.post(url, data).subscribe((data) => {
      console.log('there', data);
    })

  }
}
