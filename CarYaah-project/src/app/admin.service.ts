import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

interface IAdmin {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  log(username: string, password: string): Observable<{ auth_token: string, data: IAdmin }> {
    const url = "http://localhost:3000/admin/login"
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.cookieService.get('token'),
      }),
    };
    return this.http.post<{ auth_token: string, data: IAdmin }>(url, { username, password })
  }

  fetchclients() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.cookieService.get('token'),
      }),
    };
    const url = "http://localhost:3000/admin/clients"
    return this.http.get(url, httpOptions)
  }
  fetchowners() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.cookieService.get('token'),
      }),
    };
    const url = "http://localhost:3000/admin/owners"
    return this.http.get(url, httpOptions)
  }
  fetchconflicts() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.cookieService.get('token'),
      }),
    };
    const url = "http://localhost:3000/admin/conflicts"
    return this.http.get(url, httpOptions)
  }
  deleteclient(data: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.cookieService.get('token'),
      }),
    };
    const url = "http://localhost:3000/admin/delete/client/" + data
    return this.http.delete(url, httpOptions)
  }
  deleteowner(data: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.cookieService.get('token'),
      }),
    };
    const url = "http://localhost:3000/admin/delete/owner/" + data
    return this.http.delete(url, httpOptions)
  }
  emailClient(data: object) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.cookieService.get('token'),
      }),
    };
    const url = "http://localhost:3000/admin/email/client"
    return this.http.post(url, httpOptions, data).subscribe(() => {
      console.log('data in servie',);

    })
  }
  emailOwner(data: object) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.cookieService.get('token'),
      }),
    };
    const url = "http://localhost:3000/admin/email/owner"
    return this.http.post(url, httpOptions, data);
  }

}