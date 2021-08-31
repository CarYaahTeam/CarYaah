import { Component, OnInit } from '@angular/core';
import { CarcardService } from '../carcard.service';



@Component({
  selector: 'app-carcard',
  templateUrl: './carcard.component.html',
  styleUrls: ['./carcard.component.css'],
})
export class CarcardComponent implements OnInit {
  constructor(private carCardService: CarcardService) {}
  rangevalue=0;
  cars: any = [];


  ngOnInit(): void {
    this.getDataFromAPI();
  }

  getDataFromAPI(){
    this.carCardService.getCars().subscribe((resp)=>{
      this.cars= resp;
      // console.log(this.cars);
      
    })    
  }
  valueChanged(e:any){
     this.rangevalue = e.target.value;
     console.log(e.target.value)
       return this.cars.filter((car : {id:number, brand:string, type:string, AC:boolean, GPS:boolean, AUTOMATIC:boolean, image:string, start_date_av: Date, end_date_av:Date, bail: number, status:string, city:string, rating:number, price:number, registration_number:number})=>{
        console.log('here',this.cars[0].price);
      return car.price<=e.target.value;
      
    })
    
  }
}
