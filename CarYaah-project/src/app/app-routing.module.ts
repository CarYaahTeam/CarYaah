import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from "../app/components/test/test.component"
import { CarReservationComponent } from './car-reservation/car-reservation.component';
import { RentButtonComponent } from './components/rent-button/rent-button.component';
import { FilterComponent } from './filter/filter.component';
import {FeedbackClientComponent} from './feedback-client/feedback-client.component'
const routes: Routes = [
  { path: '', component: CarReservationComponent }, 
  { path: 'filter', component: FilterComponent },
  {path: 'owner', component: TestComponent},
  {path: '', component: RentButtonComponent},
  {path: 'feedback', component: FeedbackClientComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
