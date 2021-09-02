import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { ClientComponent } from './client/client.component';
import { CookieService } from 'ngx-cookie-service';
import { LikeCarComponent } from './like-car/like-car.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OpinionCustomerComponent } from './opinion-customer/opinion-customer.component';




import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    CarReservationComponent,
    NavComponent,
    CarInfoComponent,
    // HomepageComponent
    routingAuth,
    NavComponent,
    RentButtonComponent,
    TestComponent,
    CarReservationComponent,
    CarcardComponent,
    StarratingComponent,
    ClientComponent,
    LikeCarComponent,
    HomepageComponent,
    OpinionCustomerComponent,
    AdminComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule { }