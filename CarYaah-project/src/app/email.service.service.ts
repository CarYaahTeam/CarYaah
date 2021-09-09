import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Email {

  constructor(private http: HttpClient) { }

  sendMessage(data: object) {

    console.log("service", data);

    return this.http.post("http://localhost:3000/admin/email/client", data)
  }


}
