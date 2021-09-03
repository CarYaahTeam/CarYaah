import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Car } from './carcard/carcard.component';


@Injectable({
  providedIn: 'root'
})
export class CarcardService {

  constructor(private http: HttpClient) { }

  getCars(){
    return this.http.get<Car[]>('http://localhost:3000/cars');  
  }

  getFav(){
    return this.http.get('http://localhost:3000/cars/id')

  }
  create(carId : number){
    return this.http.get(`http://localhost:3000/fav/${carId}` )
  }

  getFav(){
    return this.http.get('http://localhost:3000/cars/id')

  }
  create(carId : number){
    return this.http.get(`http://localhost:3000/fav/${carId}` )
  }
}
