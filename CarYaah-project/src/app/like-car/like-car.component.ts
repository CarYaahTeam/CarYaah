import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-car',
  templateUrl: './like-car.component.html',
  styleUrls: ['./like-car.component.css']
})
export class LikeCarComponent implements OnInit {

  liked : boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  like(){
    if (this.liked){
      return "far fa-thumbs-up fa-2x";
    }else
    {
      return "fas fa-thumbs-up fa-2x";
    }
  }

  onClick(){
    this.liked=!this.liked
  }

}