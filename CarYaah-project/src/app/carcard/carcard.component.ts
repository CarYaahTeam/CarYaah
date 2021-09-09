import { Component, OnInit } from '@angular/core';
import { CarcardService } from '../carcard.service';
import { Router } from '@angular/router';
import { ReservationnService } from '../reservationn.service';
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
  rating: number;
  price: string;
  registration_number: number;
  createdAt: Date;
  updatedAt: Date;
  ownerId: number;
}

@Component({
  selector: 'app-carcard',
  templateUrl: './carcard.component.html',
  styleUrls: ['./carcard.component.css'],
})
export class CarcardComponent implements OnInit {
  liked: boolean = true;

  constructor(
    private carCardService: CarcardService,
    private route: Router,
    private reservationService: ReservationnService
  ) {}

  rangevalue = 300;
  cars: Car[] = [];
  saveCars: Car[] = [];
  marked: string[] = [];

  sedan_marked = false;
  sedan_checkbox = false;
  van_marked = false;
  van_checkbox = false;
  pickup_marked = false;
  pickup_checkbox = false;
  minitruck_marked = false;
  minitruck_checkbox = false;
  ac_marked = false;
  ac_checkbox = false;
  gps_marked = false;
  gps_checkbox = false;
  auto_checkbox = false;
  auto_checked = false;
  man_checkbox = false;
  man_checked = false;

  ngOnInit(): void {
    this.getDataFromAPI();
  }

  info(car: Car): void {
    this.route.navigate(['/carInfo'], { state: { data: car } });
    //this.display = true;
    //To toggle the component
    // this.displayCarInfo = true;
  }

  filter() {
    this.cars = this.saveCars.filter((car) => {
      return (
        +car.price < this.rangevalue &&
        (!this.marked.length || this.marked.includes(car.type)) &&
        (!this.ac_marked || car.AC) &&
        (!this.gps_marked || car.GPS) &&
        (!this.ac_marked || car.AC) &&
        (!this.auto_checked || car.AUTOMATIC) &&
        (!this.man_checked || !car.AUTOMATIC)
      );
    });
  }

  getDataFromAPI() {
    this.carCardService.getCars().subscribe((resp) => {
      this.cars = resp;
    });
  }

  priceChanged(e: any) {
    this.rangevalue = e.target.value;
    this.filter();
  }

  //Type filter
  checkbox(type: string) {
    const isMarked = !!this.marked.find((mark) => mark === type);
    if (isMarked) this.marked = this.marked.filter((mark) => mark !== type);
    else this.marked.push(type);
    this.filter();
  }

  ac(e: any) {
    this.ac_marked = e.target.checked;
    this.filter();
    this.cars[0].rating;
  }

  gps(e: any) {
    this.gps_marked = e.target.checked;
    this.filter();
  }

  auto(e: any) {
    this.auto_checked = e.target.checked;
    this.filter();
  }

  man(e: any) {
    this.man_checked = e.target.checked;
    this.filter();
  }
}
