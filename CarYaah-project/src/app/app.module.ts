import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import '@angular/compiler';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingAuth } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { CarReservationComponent } from './car-reservation/car-reservation.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RentButtonComponent } from './rent-button/rent-button.component';
import { TestComponent } from './test/test.component';
import { CarcardComponent } from './carcard/carcard.component';
import { StarratingComponent } from './starrating/starrating.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HomepageComponent } from './homepage/homepage.component';
import { OpinionCustomerComponent } from './opinion-customer/opinion-customer.component';
import { AdminComponent } from './admin/admin.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { FilteredCarsComponent } from './filtered-cars/filtered-cars.component';
import { OwnerProfileComponent } from './owner-profile/owner-profile.component';
import { PaiementComponent } from './paiement/paiement.component';
import { LikeCarComponent } from './like-car/like-car.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { RateCarComponent } from './rate-car/rate-car.component';
import { PopupOwnerComponent } from './popup-owner/popup-owner.component';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { UpdateClientInfosComponent } from './update-client-infos/update-client-infos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    CarReservationComponent,
    NavComponent,
    CarInfoComponent,
    routingAuth,
    NavComponent,
    RentButtonComponent,
    TestComponent,
    CarReservationComponent,
    CarcardComponent,
    StarratingComponent,
    LikeCarComponent,
    AdminComponent,
    HomepageComponent,
    OpinionCustomerComponent,
    FilteredCarsComponent,
    AdminComponent,
    OwnerProfileComponent,
    PaiementComponent,
    SendEmailComponent,
    LikeCarComponent,
    RateCarComponent,
    PopupOwnerComponent,
    UserProfileComponent,
    DialogOverviewExampleDialogComponent,
    UpdateClientInfosComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    AngularFileUploaderModule,
    FormsModule,
    BrowserModule,
    AgmCoreModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [UpdateClientInfosComponent],
})
export class AppModule {}
