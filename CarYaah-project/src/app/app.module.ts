import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/compiler'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarReservationComponent } from './car-reservation/car-reservation.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms'
import { RentButtonComponent } from './components/rent-button/rent-button.component';
import { TestComponent } from './components/test/test.component';
import { AuthComponent } from './auth/auth.component';



@NgModule({
    declarations: [
        AppComponent,
        CarReservationComponent,
        LoginComponent,
        RegisterComponent,
        RentButtonComponent,
        TestComponent,
        CarReservationComponent,
        AuthComponent

    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserModule,
        ReactiveFormsModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }