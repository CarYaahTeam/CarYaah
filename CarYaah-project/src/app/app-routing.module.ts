import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from "../app/components/test/test.component"
import { CarReservationComponent } from './car-reservation/car-reservation.component';
import { FilterComponent } from './filter/filter.component';
const routes: Routes = [
  { path: '', component: CarReservationComponent }, 
  { path: 'filter', component: FilterComponent },
  {path: 'owner', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
