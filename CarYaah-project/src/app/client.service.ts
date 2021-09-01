import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

interface IClient {
  name: string;
  password: string;
  email: string;
  adress: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient,
  ) { }

  regClient(data: object = {}) {
    console.log('hi', data)
    const url = "http://localhost:3000/client/signup"
    this.http.post(url, data).subscribe((data) => {
      console.log('there', data);
    })
  }

  logClient(email: string, password: string): Observable<{ auth_token: string, data: IClient }> {
    const url = "http://localhost:3000/client/signin"
    return this.http.post<{ auth_token: string, data: IClient }>(url, { email, password })
  }
}
