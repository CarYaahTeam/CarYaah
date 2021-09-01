import { Component, OnInit } from '@angular/core';
import { CarcardService } from '../carcard.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-carcard',
  templateUrl: './carcard.component.html',
  styleUrls: ['./carcard.component.css'],
})
export class CarcardComponent implements OnInit {
  liked : boolean=true;

  constructor(private carCardService: CarcardService) {}

  cars: any = [];

  ngOnInit(): void {
    this.getDataFromAPI();
  }

  getDataFromAPI(){
    this.carCardService.getCars().subscribe((resp)=>{
      this.cars= resp;
      console.log('hello');
      
    })
  }
  like(){
    if (this.liked){
      return "far fa-heart fa-2x";
    }else
    {
      return "fas fa-heart fa-2x";
    }
  }

  onClick(){
    this.liked=!this.liked
  }
}
