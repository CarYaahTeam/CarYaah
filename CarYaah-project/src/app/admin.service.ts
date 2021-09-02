import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient,) { }

  fetchclients() {
    const url = "http://localhost:3000/admin/clients"
    return this.http.get(url)
  }
  fetchowners() {
    const url = "http://localhost:3000/admin/owners"
    return this.http.get(url)
  }

}
