import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/compiler'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarReservationComponent } from './car-reservation/car-reservation.component';
import { FilterComponent } from './filter/filter.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms'
import { RentButtonComponent } from './components/rent-button/rent-button.component';
import { TestComponent } from './components/test/test.component';
import { CarcardComponent } from './carcard/carcard.component';




@NgModule({
  declarations: [
    AppComponent,
    CarReservationComponent,
    FilterComponent,
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
    BrowserModule,
    RouterModule.forRoot([
      { path: "filter", component: FilterComponent }
    ]),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }