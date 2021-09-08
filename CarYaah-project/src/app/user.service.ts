import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  getUser(){
    return this.http.get('http://localhost:3000/client/retrieve');
console.log();
 
  }
  getFav(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjMxMDA4MjMzLCJleHAiOjE2MzEwOTQ2MzN9.kAUszd8ZVu54MDFy9fEO4b9Ib0GSJkNtiXx1k_yr6TM"
      })
    };
    
    return this.http.get('http://localhost:3000/client/fav' ,httpOptions );
  }
}
