import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from "../app/components/test/test.component"
import { FilterComponent } from './filter/filter.component';
import { CarReservationComponent } from './car-reservation/car-reservation.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CarcardComponent } from './carcard/carcard.component'
import { StarratingComponent } from './starrating/starrating.component'
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'client/profile', component: ClientComponent },
  { path: '', component: CarReservationComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'owner', component: TestComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cars', component: CarcardComponent },
  { path: 'stars', component: StarratingComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingAuth = [RegisterComponent, LoginComponent]