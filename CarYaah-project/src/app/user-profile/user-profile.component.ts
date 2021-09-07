import { Component, OnInit } from '@angular/core';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { UserService } from '../user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  client : any=[];
  fav:any=[];

  constructor(private  http : UserService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.getData();
    this.http.getFav().subscribe((resp)=>{
      // this.fav= resp;
      console.log(resp)
    })
  }

  getData(){
    this.http.getUser().subscribe((resp :any)=>{
      this.client= resp
      console.log(this.client); 
    })
  }

openDialog(): void {
  const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
    width: '750px',
    height:'550px',
    data: null
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}
}
