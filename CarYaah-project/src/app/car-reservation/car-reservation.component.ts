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
  findAll(start_date_av : String , end_date_av  : String) {
    const data = {start_date_av , end_date_av}
    this.rs.addReservation(data)
}
}
