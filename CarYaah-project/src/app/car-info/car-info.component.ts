import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css'],
})
export class CarInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // pay(data: any) {
  //   this.paymentService.pay(data).subscribe((url: any) => {
  //     window.open(url);
  //   });
  // }
}
