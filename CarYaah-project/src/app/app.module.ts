import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
=======
import '@angular/compiler'
>>>>>>> 1244705122970ab5ee19b8a0ea5e374b7eae8d63
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RentButtonComponent } from './components/rent-button/rent-button.component';
import { TestComponent } from './components/test/test.component';
=======
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CarReservationComponent } from './car-reservation/car-reservation.component';
>>>>>>> 1244705122970ab5ee19b8a0ea5e374b7eae8d63

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    RentButtonComponent,
    TestComponent
=======
    CarReservationComponent,
    NavBarComponent
 
>>>>>>> 1244705122970ab5ee19b8a0ea5e374b7eae8d63
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
   
=======
    GooglePlaceModule, BrowserModule, 
    MatToolbarModule
>>>>>>> 1244705122970ab5ee19b8a0ea5e374b7eae8d63
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
