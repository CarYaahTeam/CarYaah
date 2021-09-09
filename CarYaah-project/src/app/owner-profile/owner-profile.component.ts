import { Component, OnInit } from '@angular/core';
// import { log } from 'console';
import { OwnerService } from '../owner.service';
// import { DialogOverviewExampleDialog2Component } from '../dialog-overview-example2-dialog/dialog-overview-example2-dialog.component';
// import {
//   MatDialog,
//   MatDialogRef,
//   MAT_DIALOG_DATA,
// } from '@angular/material/dialog';

@Component({
  selector: 'app-owner-profile',
  templateUrl: './owner-profile.component.html',
  styleUrls: ['./owner-profile.component.css'],
})
export class OwnerProfileComponent implements OnInit {
  owner: any = [];
  carOwner: any = [];

  constructor(private http: OwnerService) {}

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
}
