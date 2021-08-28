import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from "../app/components/test/test.component"
import { CarReservationComponent } from './car-reservation/car-reservation.component';
import { RentButtonComponent } from './components/rent-button/rent-button.component';
import { FilterComponent } from './filter/filter.component';
import {FeedbackClientComponent} from './feedback-client/feedback-client.component'

import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: CarReservationComponent },
 
 
  { path: 'auth', component: AuthComponent },
  { path: 'filter', component: FilterComponent },
  {path: 'owner', component: TestComponent},
  {path: '', component: RentButtonComponent},
  {path: 'feedback', component: FeedbackClientComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
