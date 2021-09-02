import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CarReservationComponent } from './car-reservation/car-reservation.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { RentButtonComponent } from './rent-button/rent-button.component';
import { FeedbackClientComponent } from './feedback-client/feedback-client.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CarcardComponent } from './carcard/carcard.component';
import { StarratingComponent } from './starrating/starrating.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { OwnerProfileComponent } from './owner-profile/owner-profile.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'test', component: TestComponent },
  { path: 'client/profile', component: ClientComponent },
  { path: '', component: CarReservationComponent },
  { path: 'owner', component: TestComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cars', component: CarcardComponent },
  { path: 'stars', component: StarratingComponent },
  { path: 'carinfo', component: CarInfoComponent },
  { path: 'ownerprofile', component: OwnerProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingAuth = [RegisterComponent, LoginComponent];
