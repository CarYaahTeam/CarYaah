import { Component, OnInit } from '@angular/core';

import { ReservationnService } from '../reservationn.service';
@Component({
  selector: 'app-car-reservation',
  templateUrl: './car-reservation.component.html',
  styleUrls: ['./car-reservation.component.css']
})
export class CarReservationComponent implements OnInit {

  constructor(private rs:ReservationnService )  {}
  date:any= [];
  ngOnInit(): void {
    
  }
  insert(start : String , end  : String) {
    const data = {start , end}
    this.rs.addReservation(data)

}

}
