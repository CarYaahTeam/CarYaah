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
  saveCars : any = [];

  marked: any = []

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

  ngOnInit(): void {
    this.getDataFromAPI();
  }

  getDataFromAPI(){
    this.carCardService.getCars().subscribe((resp)=>{
      this.cars= resp; 
      this.saveCars= resp; 

    })    
  }

  priceChanged(e:any){
     this.rangevalue = e.target.value;
    this.cars = this.saveCars
    var storage = []
    for(var i = 0 ; i < this.cars.length ; i++){
      if(this.cars[i].price * 1 < this.rangevalue * 1 ){
         storage.push(this.cars[i])
      }
    }
    this.cars = storage
  }

  checkbox(type: string){
    if (this.marked.includes(type)) {
      this.marked = this.marked.filter((elem: string) => elem !== type)
    } else {
      this.marked.push(type)
    }
    console.log(this.marked)
    const storage: any = []
    this.marked.forEach((element: string) => {
      this.saveCars.forEach((car: any) => {
        car.type.toUpperCase() === element.toUpperCase() ? storage.push(car) : null
      });

    });
    this.cars = this.marked.length ? storage : this.saveCars
  }
  // sedan(e:any){
  //   this.sedan_marked= e.target.checked;
  //   this.cars = this.saveCars
  //   var storage = []
  //   for(var i = 0 ; i < this.cars.length ; i++){
  //     if(this.cars[i].type === 'sedan' && e.target.checked ){
  //        storage.push(this.cars[i])
  //     }
  //   }
  //   this.cars = storage
  // }

  // van(e:any){
  //   this.van_marked= e.target.checked;
  //   this.cars = this.saveCars
  //   var storage = []
  //   for(var i = 0 ; i < this.cars.length ; i++){
  //     if(this.cars[i].type === 'van' && e.target.checked ){
  //        storage.push(this.cars[i])
  //     }
  //   }
  //   this.cars = storage
  // }

  // pickup(e:any){
  //   this.pickup_marked= e.target.checked;
  //   this.cars = this.saveCars
  //   var storage = []
  //   for(var i = 0 ; i < this.cars.length ; i++){
  //     if(this.cars[i].type === 'pickup' && e.target.checked ){
  //        storage.push(this.cars[i])
  //     }
  //   }
  //   this.cars = storage
  // }

  // minitruck(e:any){
  //   this.minitruck_marked= e.target.checked;
  //   this.cars = this.saveCars
  //   var storage = []
  //   for(var i = 0 ; i < this.cars.length ; i++){
  //     if(this.cars[i].type === 'minitruck' && e.target.checked ){
  //        storage.push(this.cars[i])
  //     }
  //   }
  //   this.cars = storage
  // }

  // ac(e:any){
  //   this.ac_marked=e.target.checked;
  //   this.cars = this.saveCars
  //   var storage = []
  //   for(var i = 0 ; i < this.cars.length ; i++){
  //     if(this.cars[i].AC && e.target.checked ){
  //        storage.push(this.cars[i])
  //     }
  //   }
  //   this.cars = storage
  // }

  // gps(e:any){
  //   this.gps_marked=e.target.checked;
  //   this.cars = this.saveCars
  //   var storage = []
  //   for(var i = 0 ; i < this.cars.length ; i++){
  //     if(this.cars[i].GPS && e.target.checked ){
  //        storage.push(this.cars[i])
  //     }
  //   }
  //   this.cars = storage
  // }


  
}
