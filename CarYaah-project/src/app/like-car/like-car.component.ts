import { Component, OnInit, Input } from '@angular/core';
import { CarcardService } from '../carcard.service';

@Component({
  selector: 'app-like-car',
  templateUrl: './like-car.component.html',
  styleUrls: ['./like-car.component.css'],
})
export class LikeCarComponent implements OnInit {
  @Input()
  carId: number = 0;

  liked: boolean = false;

  constructor(private carCardService: CarcardService) {}

  ngOnInit(): void {
    this.checkIsFav();
  }

  like = () => (this.liked ? 'fas fa-heart fa-2x' : 'far fa-heart fa-2x');

  onClick() {
    this.carCardService
      .updateFavourite(this.carId)
      .subscribe((isLiked) => (this.liked = isLiked));
  }

  checkIsFav() {
    this.carCardService
      .isFavourite(this.carId)
      .subscribe((isLiked) => (this.liked = isLiked));
  }
}
