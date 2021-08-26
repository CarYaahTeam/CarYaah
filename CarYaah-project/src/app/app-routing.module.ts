import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from "../app/components/test/test.component"
import { CarReservationComponent } from './car-reservation/car-reservation.component';
import { AuthComponent } from './auth/auth.component';
const routes: Routes = [
  { path: '', component: TestComponent },
  { path: '', component: CarReservationComponent },
  { path: 'auth', component: AuthComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
