import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.css'],
})
export class StarratingComponent implements OnInit {
  @Input() rating: number = 0;

  iconClass: { [key: number]: string } = {
    0: 'far fa-star',
    0.5: 'fas fa-star-half-alt',
    1: 'fas fa-star',
  };

  stars: number[] = [0, 0, 0, 0, 0];

  constructor() {}

  ngOnInit(): void {
    this.fillStars();
  }

  fillStars() {
    var starsToFill = Math.round(this.rating * 2) / 2; //round to nearest 0.5
    var i = 0;
    while (starsToFill > 0.5) {
      this.stars[i] = 1;
      i++;
      starsToFill--;
    }
    if (starsToFill === 0.5) {
      this.stars[i] = 0.5;
    }
  }
}
