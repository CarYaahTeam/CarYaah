import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient,) { }

  fetchclients() {
    const url = "http://localhost:3000/admin/clients"
    this.http.get(url).subscribe((data) => {
      console.log('clients', data);
    })
  }
  fetchowners() {
    const url = "http://localhost:3000/admin/owners"
    this.http.get(url).subscribe((data) => {
      console.log('owners', data);
    })
  }

}
