import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReservationnService } from '../reservationn.service';
@Component({
  selector: 'app-car-reservation',
  templateUrl: './car-reservation.component.html',
  styleUrls: ['./car-reservation.component.css']
})
export class CarReservationComponent implements OnInit {
cars:any;
  constructor(private rs:ReservationnService, private route : Router )  {}
  date:any= [];
  ngOnInit(): void {
    this.rs.findAll().subscribe(data=>this.cars=data) //this
  }
  findAll(start_date_av : String , end_date_av  : String) {
    const data = {start_date_av , end_date_av}
    // 
    this.route.navigateByUrl("/filter")
}
}
