import { Component, OnInit } from '@angular/core';
// import { log } from 'console';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-owner-profile',
  templateUrl: './owner-profile.component.html',
  styleUrls: ['./owner-profile.component.css'],
})
export class OwnerProfileComponent implements OnInit {
  owner: any = [];
  carOwner: any = [];

  constructor(private http: OwnerService, carOwner: OwnerService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.http.getOwner().subscribe((res: any) => {
      this.owner = res;
      console.log(this.owner);
    });
  }

  getCar() {
    this.carOwner.getCarOwner().subscribe((res: any) => {
      this.carOwner = res;
      console.log(this.owner);
    });
  }
}
