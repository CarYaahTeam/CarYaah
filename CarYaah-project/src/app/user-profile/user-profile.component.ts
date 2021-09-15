import { Component, OnInit } from '@angular/core';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CarcardService } from '../carcard.service';
import { UpdateClientInfosComponent } from '../update-client-infos/update-client-infos.component';
import { FeedbackClientComponent } from '../feedback-client/feedback-client.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface Car {
  id: number;
  brand: string;
  type: string;
  AC: boolean;
  GPS: boolean;
  AUTOMATIC: boolean;
  image: string;
  start_date_av: Date;
  end_date_av: Date;
  bail: string;
  status: string;
  city: string;
  rating: number;
  price: string;
  registration_number: number;
  createdAt: Date;
  updatedAt: Date;
  ownerId: number;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  client: any = [];
  fav: Car[] = [];
  bookings: any = [];
  cars: Car[] = [];

  showBookings = false;
  showFavourites = true;

  constructor(
    private UserService: UserService,
    private route: Router,
    public dialog: MatDialog,
    private CarService: CarcardService,
    private msg: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getData();
    this.getFavCars();
    this.getBookings();
    this.getCars();
  }
  getData() {
    this.UserService.getUser().subscribe((resp: any) => {
      this.client = resp;
    });
  }

  getFavCars() {
    this.UserService.getFav().subscribe((resp: any) => {
      this.fav = resp;
      console.log('fav', this.fav);
    });
  }

  getBookings() {
    this.UserService.getBooking().subscribe((resp: any) => {
      this.bookings = resp;
      console.log('bookings', this.bookings);
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '750px',
      height: '750px',
      data: null,
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }

  info(car: Car): void {
    this.route.navigate(['/carInfo'], { state: { data: car } });
    //this.display = true;
    //To toggle the component
    // this.displayCarInfo = true;
  }

  getCars() {
    this.CarService.getCars().subscribe((resp: any) => {
      this.cars = resp;
    });
  }

  toggleBookings() {
    this.showBookings = !this.showBookings;
    this.showFavourites = false;
  }

  toggleFavourites() {
    this.showFavourites = !this.showFavourites;
    this.showBookings = false;
  }
  // toggleFeedBack(){
  //   this.showFeedBack = !this.showFeedBack;
  //   this.showBookings = false;
  //   this.router.navigateByUrl("/feedback");
  // }
  showFeedBack() {
    this.router.navigateByUrl('/feedback');
  }
  sendMessage(data: object) {
    this.msg.sendMsg(data).subscribe((data) => {
      console.log(data);
    });
  }

  updateInfosDialog() {
    this.dialog.open(UpdateClientInfosComponent);
  }

  sendFeedbackDialog() {
    this.dialog.open(FeedbackClientComponent);
  }
}
