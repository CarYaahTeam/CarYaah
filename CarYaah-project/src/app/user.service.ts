import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getUser() {
    return this.http.get('http://localhost:3000/client/retrieve');
    console.log();
  }
  getFav() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.cookieService.get('token'),
      }),
    };

    return this.http.get('http://localhost:3000/client/fav', httpOptions);
  }

  getBooking(){
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.cookieService.get('token'),
      })
    };
    return this.http.get('http://localhost:3000/client/bookings', httpOptions)
  }

}
