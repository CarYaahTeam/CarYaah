import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../owner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-profile',
  templateUrl: './owner-profile.component.html',
  styleUrls: ['./owner-profile.component.css'],
})
export class OwnerProfileComponent implements OnInit {
  owner: any = [];
  carOwner: any = [];

  constructor(private http: OwnerService, private route: Router) {}

  ngOnInit(): void {
    this.getData();
    this.getCar();
  }

  getData() {
    this.http.getOwner().subscribe((res: any) => {
      this.owner = res;
      console.log(this.owner);
    });
  }

  getCar() {
    this.http.getCarOwner().subscribe(
      (res: any) => {
        this.carOwner = res;
        console.log('cars:', res);
      },
      (err: any) => console.log(err)
    );
  }

  tohome(str: string) {
    this.route.navigateByUrl(str);
  }
}
