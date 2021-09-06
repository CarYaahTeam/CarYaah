import { Component, OnInit } from '@angular/core';

export interface Car {
  id: number;
  brand: string;
  type: string;
  AC: boolean;
  GPS: boolean;
  AUTOMATIC: boolean;
  image: string;
  start_date_av: Date;
  end_date_av: Date;
  bail: string;
  status: string;
  city: string;
  rating: string;
  price: string;
  registration_number: number;
  createdAt: Date;
  updatedAt: Date;
  ownerId: number;
}
@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {

  constructor() { }
  car: any
  ngOnInit(): void {
    // console.log('car data ===>',history.state.data);
    // console.log('hi');

    this.car = history.state.data
    if (history.state.data.type === 'sedan') {
      this.car['type'] = 'Sedan';
    }
    if (history.state.data.AC) {
      this.car['AC'] = 'AC'
    }
    if (history.state.data.GPS) {
      this.car['GPS'] = 'GPS'
    }
    if (history.state.data.AUTOMATIC) {
      this.car['AUTOMATIC'] = 'AUTOMATIC'
    }
    if (!history.state.data.AUTOMATIC) {
      this.car['AUTOMATIC'] = 'MANUAL'
    }

    console.log(this.car["brand"]);
    console.log(this.car);
  }



}
