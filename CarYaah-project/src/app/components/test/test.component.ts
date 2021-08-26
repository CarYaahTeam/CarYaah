import { Component, OnInit } from '@angular/core';
import { AddCar } from 'src/app/test.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private ac:AddCar) { }
carInfo:any;

  ngOnInit(): void {
  }
add(brand: string, type:string, startDate:string, endDate:string, available:String, notAvailable:String , price:string ){
  const datacar = {brand, type, price, available, notAvailable, startDate,endDate}
  this.ac.add(datacar)
}

}