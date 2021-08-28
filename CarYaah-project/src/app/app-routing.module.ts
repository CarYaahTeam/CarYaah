import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from "../app/components/test/test.component"
import { FilterComponent } from './filter/filter.component';
import { CarReservationComponent } from './car-reservation/car-reservation.component';
import {CarcardComponent} from '../app/carcard/carcard.component'
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import{StarratingComponent} from '../app/starrating/starrating.component'


const routes: Routes = [
  { path: '', component: TestComponent },
  { path: '', component: CarReservationComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'owner', component: TestComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path: 'cars', component: CarcardComponent},
  {path: 'stars', component: StarratingComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
