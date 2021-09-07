import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CarReservationComponent } from './car-reservation/car-reservation.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { FeedbackClientComponent } from './feedback-client/feedback-client.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CarcardComponent } from './carcard/carcard.component';
import { StarratingComponent } from './starrating/starrating.component';
import { ClientComponent } from './client/client.component';
import {UserProfileComponent} from '../app/user-profile/user-profile.component';
import { AdminComponent } from './admin/admin.component';
import { OwnerProfileComponent } from './owner-profile/owner-profile.component';
import { PaiementComponent } from './paiement/paiement.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'test', component: TestComponent },
  { path: 'client/profile', component: ClientComponent },
  { path: 'user', component: UserProfileComponent},
  { path: 'home', component: CarReservationComponent },
  { path: 'owner', component: TestComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cars', component: CarcardComponent },
  { path: 'stars', component: StarratingComponent },
  { path: 'ownerprofile', component: OwnerProfileComponent },
  { path: 'pay', component: PaiementComponent },
  { path: 'carInfo', component: CarInfoComponent },
  { path: 'feedback', component: FeedbackClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingAuth = [RegisterComponent, LoginComponent];
