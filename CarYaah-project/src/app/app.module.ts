import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/compiler'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CarReservationComponent } from './car-reservation/car-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    CarReservationComponent,
    NavBarComponent
 
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    GooglePlaceModule, BrowserModule, 
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
