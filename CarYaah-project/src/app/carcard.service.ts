import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


import { Car } from './carcard/carcard.component';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CarcardService {
  constructor(private http: HttpClient, private cookie: CookieService) { }

  getCars() {
    return this.http.get<Car[]>('http://localhost:3000/cars');
  }

  isFavourite(carId: number) {
    const token = this.cookie.get('token');
    return this.http.get<boolean>(`http://localhost:3000/cars/fav/${carId}`, {
      headers: { authorization: token },
    });
  }

  updateFavourite(carId: number) {
    const token = this.cookie.get('token');

    return this.http.post<boolean>(
      `http://localhost:3000/cars/fav/${carId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
  }

  getFav() {
    return this.http.get('http://localhost:3000/cars/id');
  }
  create(carId: number) {
    return this.http.get(`http://localhost:3000/fav/${carId}`);
  }
}
