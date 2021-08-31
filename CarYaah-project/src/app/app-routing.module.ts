import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CarReservationComponent } from './car-reservation/car-reservation.component';
import { CarInfoComponent } from './car-info/car-info.component';
import {UserProfileComponent} from '../app/user-profile/user-profile.component'
import { RentButtonComponent } from './rent-button/rent-button.component';
import { FilterComponent } from './filter/filter.component';
import { FeedbackClientComponent } from './feedback-client/feedback-client.component';

import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CarcardComponent } from './carcard/carcard.component';
import { StarratingComponent } from './starrating/starrating.component';

const routes: Routes = [
  { path: 'home', component: CarReservationComponent },

  { path: 'auth', component: AuthComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'owner', component: TestComponent },
  // { path: 'owner', component: RentButtonComponent },
  { path: 'feedback', component: FeedbackClientComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'car/card', component: CarcardComponent },
  { path: 'stars', component: StarratingComponent },
  { path: 'login', component: LoginComponent },

  { path: 'cars', component: CarInfoComponent },
  { path: 'user', component: UserProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingAuth = [RegisterComponent, LoginComponent];
