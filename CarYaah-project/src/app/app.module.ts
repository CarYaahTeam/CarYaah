import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/compiler'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarReservationComponent } from './car-reservation/car-reservation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms'
import { RentButtonComponent } from './components/rent-button/rent-button.component';
import { TestComponent } from './components/test/test.component';
import { CarcardComponent } from './carcard/carcard.component';




@NgModule({
  declarations: [
    AppComponent,
    CarReservationComponent,
    LoginComponent,
    RegisterComponent,
    RentButtonComponent,
    TestComponent,
    CarReservationComponent,
    CarcardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    GooglePlaceModule,
    BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }