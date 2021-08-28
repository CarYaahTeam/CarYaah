import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/compiler'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { MatCardModule } from '@angular/material/card';

import { CarReservationComponent } from './car-reservation/car-reservation.component';
import { FilterComponent } from './filter/filter.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms'
import { RentButtonComponent } from './components/rent-button/rent-button.component';
import { TestComponent } from './components/test/test.component';
import { CarcardComponent } from './carcard/carcard.component';
import { FeedbackClientComponent } from './feedback-client/feedback-client.component';



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
    CarcardComponent,
    FeedbackClientComponent,


  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatCardModule,
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOQjKI6GLozK-tgmd7m98Ev-ERhXq0VDI',
      libraries: ['places'],
    }),
    RouterModule.forRoot([
      { path: "filter", component: FilterComponent }
    ]),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }