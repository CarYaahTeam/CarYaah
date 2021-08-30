import { Component, OnInit } from '@angular/core';
import {CarcardService} from '../carcard.service'



@Component({
  selector: 'app-carcard',
  templateUrl: './carcard.component.html',
  styleUrls: ['./carcard.component.css']
})
export class CarcardComponent implements OnInit {
  
  
  
  constructor(private carCardService : CarcardService) { }
  
  cars: any=[];
  
  

  ngOnInit(): void {
    this.getDataFromAPI()
  }

  getDataFromAPI(){
    this.carCardService.getCars().subscribe((resp)=>{
      this.cars= resp;
      console.log(this.cars);
      
    })
  }
}
