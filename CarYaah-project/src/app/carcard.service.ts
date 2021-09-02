import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Car } from './carcard/carcard.component';


@Injectable({
  providedIn: 'root'
})
export class CarcardService {

  constructor(private http: HttpClient) { }

  getCars(){
    return this.http.get<Car[]>('http://localhost:3000/cars');  
  }
}
