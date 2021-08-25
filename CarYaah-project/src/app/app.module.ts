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
=======
import { RentButtonComponent } from './components/rent-button/rent-button.component';
import { TestComponent } from './components/test/test.component';
=======
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CarReservationComponent } from './car-reservation/car-reservation.component';
>>>>>>> 1244705122970ab5ee19b8a0ea5e374b7eae8d63
>>>>>>> c1784b549a82a0de23d4b9199063676cbf8235d5

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    CarReservationComponent,
    NavBarComponent
 
=======
    LoginComponent,
    RegisterComponent
>>>>>>> 6b3fc1dc25259c7a2505d35daff02795e93c0aeb
=======
    RentButtonComponent,
    TestComponent
=======
    CarReservationComponent,
    NavBarComponent
 
>>>>>>> 1244705122970ab5ee19b8a0ea5e374b7eae8d63
>>>>>>> c1784b549a82a0de23d4b9199063676cbf8235d5
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
<<<<<<< HEAD
    GooglePlaceModule, BrowserModule, 
    MatToolbarModule
=======
    ReactiveFormsModule,
    HttpClientModule

>>>>>>> 6b3fc1dc25259c7a2505d35daff02795e93c0aeb
=======
    HttpClientModule
   
=======
    GooglePlaceModule, BrowserModule, 
    MatToolbarModule
>>>>>>> 1244705122970ab5ee19b8a0ea5e374b7eae8d63
>>>>>>> c1784b549a82a0de23d4b9199063676cbf8235d5
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }