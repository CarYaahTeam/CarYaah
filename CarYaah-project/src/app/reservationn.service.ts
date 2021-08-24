import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationnService {

  constructor(private http: HttpClient) {}

  addReservation(data: any){
    console.log("data=>",data);

    return this.http.post('http://localhost:3000/api/reservation', data);
  }
}
