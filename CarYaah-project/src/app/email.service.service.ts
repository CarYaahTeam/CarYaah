import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Email {

  constructor(private httpreq: HttpClient) { }

  sendMessage(body: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }
    return this.httpreq.post("http://localhost:3000/email", body, headers)
  }

}
