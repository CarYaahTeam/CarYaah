import { Component, OnInit } from '@angular/core';
import { DialogOverviewExampleDialog2Component } from '../dialog-overview-example2-dialog/dialog-overview-example2-dialog.component';
import { UserService } from '../user.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  client: any = [];
  fav: any = [];

  constructor(private http: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getData();
    this.http.getFav().subscribe((resp) => {
      // this.fav= resp;
      console.log(resp);
    });
  }
  getData() {
    this.http.getUser().subscribe((resp: any) => {
      this.client = resp;
      console.log(this.client);
    });
  }

  getFavCars() {
    this.http.getFav().subscribe((resp: any) => {
      this.fav = resp;
      console.log(this.fav);
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog2Component, {
      width: '750px',
      height: '550px',
      data: null,
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }
}
