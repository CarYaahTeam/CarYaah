import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddCar {

  constructor(private http: HttpClient) { }


  add(dataCar : any) {
    console.log("***data****",dataCar)
  return this.http.post('http://localhost:3000/owner',dataCar);
}
}