import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

interface IOwner {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  regOwner(data: object) {
    const url = "http://localhost:3000/owner/signup"
    this.http.post(url, data).subscribe((data) => {
      console.log('there', data);
    })
  }
  logOwner(email: string, password: string): Observable<IOwner> {
    const url = "http://localhost:3000/owner/signin"
    return this.http.post<IOwner>(url, { email, password })
  }
}
