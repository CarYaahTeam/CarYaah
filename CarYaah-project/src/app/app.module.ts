import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/compiler';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingAuth } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { MatCardModule } from '@angular/material/card';

import { CarReservationComponent } from './car-reservation/car-reservation.component';

import { NavComponent } from './nav/nav.component';
import { CarInfoComponent } from './car-info/car-info.component';
// import { HomepageComponent } from './components/homepage/homepage.component';
import { FilterComponent } from './filter/filter.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RentButtonComponent } from './rent-button/rent-button.component';
import { TestComponent } from './test/test.component';
import { CarcardComponent } from './carcard/carcard.component';
import { FeedbackClientComponent } from './feedback-client/feedback-client.component';
import { StarratingComponent } from './starrating/starrating.component';
import { MatButtonModule } from '@angular/material/button';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarInfoComponent,
    // HomepageComponent
    FilterComponent,
    routingAuth,
    RentButtonComponent,
    TestComponent,
    CarReservationComponent,
    CarcardComponent,
    FeedbackClientComponent,
    StarratingComponent,
    UserProfileComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule.forRoot([{ path: 'filter', component: FilterComponent }]),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOQjKI6GLozK-tgmd7m98Ev-ERhXq0VDI',
      libraries: ['places'],
    }),
    RouterModule.forRoot([{ path: 'filter', component: FilterComponent }]),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
