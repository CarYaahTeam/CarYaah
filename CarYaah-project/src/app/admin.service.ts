import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface IAdmin {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient,) { }

  log(username: string, password: string): Observable<{ auth_token: string, data: IAdmin }> {
    const url = "http://localhost:3000/admin/login"
    return this.http.post<{ auth_token: string, data: IAdmin }>(url, { username, password })
  }

  fetchclients() {
    const url = "http://localhost:3000/admin/clients"
    return this.http.get(url)
  }
  fetchowners() {
    const url = "http://localhost:3000/admin/owners"
    return this.http.get(url)
  }
  fetchconflicts() {
    const url = "http://localhost:3000/admin/conflicts"
    return this.http.get(url)
  }
  deleteclient(data: string) {
    const url = "http://localhost:3000/admin/delete/client/" + data
    return this.http.delete(url)
  }
  deleteowner(data: string) {
    const url = "http://localhost:3000/admin/delete/owner/" + data
    return this.http.delete(url)
  }

}