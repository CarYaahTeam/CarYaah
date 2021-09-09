import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Car } from './car-info/car-info.component';

@Injectable({
  providedIn: 'root'
})
export class ReservationnService {
cars:any = []
filteredcars:any=[]
  constructor(private http: HttpClient) {}

  findAll(start_date_av: string,end_date_av : string){
    return this.http.get<Car[]>(`http://localhost:3000/cars/search/?start_date_av=${start_date_av}&end_date_av=${end_date_av}`);
  }
}
