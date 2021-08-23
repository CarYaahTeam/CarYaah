import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

export interface LoginForm {
  email: string;
  password: string;
};

export const JWT_NAME = 'blog-token';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(loginForm: LoginForm) {

    return this.http.post<any>('localhost:3000', { email: loginForm.email, password: loginForm.password }).pipe(
      map((token) => {
        console.log('token');
        localStorage.setItem(JWT_NAME, token.access_token);
        return token;
      })
    )
  }

  logout() {
    localStorage.removeItem(JWT_NAME);
  }

  // register(user: User) {
  //   return this.http.post<any>('/api/users', user).pipe(
  //     tap(user => console.log(user)),
  //     map(user => user)
  //   )
  // }



}