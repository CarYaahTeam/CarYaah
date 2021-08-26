import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationnService {

  constructor(private http: HttpClient) {}

  findAll(){
    return this.http.get('http://localhost:3000/api/cars');
  }
}
