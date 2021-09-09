import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car-info/car-info.component';



import { ReservationnService } from '../reservationn.service';
@Component({
  selector: 'app-car-reservation',
  templateUrl: './car-reservation.component.html',
  styleUrls: ['./car-reservation.component.css']
})
export class CarReservationComponent implements OnInit {
cars:Car[] = []
  constructor(private reservationnService:ReservationnService, private router : Router )  {}
  date:any= [];
  ngOnInit(): void {
  }
  
  findAll(start_date_av : string , end_date_av  : string) {
    this.reservationnService.findAll(start_date_av,end_date_av).subscribe((cars) => {
      console.log(cars)
      this.cars = cars
      this.reservationnService.filteredcars=cars
     this.router.navigateByUrl("/filteredCars"); 
    }
      )}
     
  
}





