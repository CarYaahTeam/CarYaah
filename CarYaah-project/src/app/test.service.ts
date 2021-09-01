import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddCar {
  constructor(private http: HttpClient) {}

  add(dataCar: any) {
    console.log('***data****', dataCar);
    return this.http.post('http://localhost:3000/owner/creat', dataCar);
  }
  getCars(dataCar: any) {
    console.log('***data****', dataCar);
    return this.http.get('http://localhost:3000/owner/get');
  }

  upDateCars(dataCar: any) {
    return this.http.put('http://localhost:3000/owner/update/', dataCar);
  }
  deleteCars(id: any) {
    return this.http.delete('http://localhost:3000/owner/delete/:' + id);
  }
}
