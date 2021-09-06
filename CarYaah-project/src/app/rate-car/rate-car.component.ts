import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-car',
  templateUrl: './rate-car.component.html',
  styleUrls: ['./rate-car.component.css']
})
export class RateCarComponent implements OnInit {
  rating = 0;
  starCount = 5;
  ratingArr: boolean[] = []
  constructor() { 
    this.ratingArr = Array(this.starCount).fill(false);
  }

  ngOnInit(): void {
  }


    returnStar(i: number) {
      if (this.rating >= i + 1) {
          return 'fas fa-star'
    } else {

      return 'far fa-star';
    }
  }

  onClick(i: number) {
    this.rating = i + 1;
  }
}
