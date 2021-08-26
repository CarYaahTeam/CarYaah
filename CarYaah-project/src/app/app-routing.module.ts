import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from "../app/components/test/test.component"
import { CarReservationComponent } from './car-reservation/car-reservation.component';

const routes: Routes = [
  
  {path: '', component: TestComponent},
  { path: '', component: CarReservationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
