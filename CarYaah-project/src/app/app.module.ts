import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/compiler'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CarReservationComponent } from './car-reservation/car-reservation.component';
=======
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 6b3fc1dc25259c7a2505d35daff02795e93c0aeb

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CarReservationComponent,
    NavBarComponent
 
=======
    LoginComponent,
    RegisterComponent
>>>>>>> 6b3fc1dc25259c7a2505d35daff02795e93c0aeb
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    GooglePlaceModule, BrowserModule, 
    MatToolbarModule
=======
    ReactiveFormsModule,
    HttpClientModule

>>>>>>> 6b3fc1dc25259c7a2505d35daff02795e93c0aeb
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }