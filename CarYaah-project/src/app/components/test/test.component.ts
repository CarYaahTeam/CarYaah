import { Component, OnInit } from '@angular/core';
import { AddCar } from 'src/app/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor(private ac: AddCar) {}

  carInfo: any;

  ngOnInit(): void {}
  add(
    brand: string,
    type: string,
    startDate: string,
    endDate: string,
    price: string
  ) {
    const datacar = { brand, type, price, startDate, endDate, id_owner: 1 };
    this.ac.add(datacar).subscribe((data: any) => {
      console.log(data['car']);
    });
  }
}
