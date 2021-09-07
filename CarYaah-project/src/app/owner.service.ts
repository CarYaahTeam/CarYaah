import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IOwner {
  name: string;
  password: string;
  email: string;
  adress: string;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  constructor(private http: HttpClient) {}

  regOwner(data: object) {
    console.log('hi', data)
    const url = "http://localhost:3000/owner/signup"
    this.http.post(url, data).subscribe((data) => {
      console.log('there', data);
    });
  }
  logOwner(
    email: string,
    password: string
  ): Observable<{ auth_token: string; data: IOwner }> {
    const url = 'http://localhost:3000/owner/signin';
    return this.http.post<{ auth_token: string; data: IOwner }>(url, {
      email,
      password,
    });
  }
  getOwner() {
    return this.http.get('http://localhost:3000/owner/profile');
  }
 

  getCarOwner(dataCar: any) {
    return this.http.get('http://localhost:3000/owner/getCar');
  }
}
