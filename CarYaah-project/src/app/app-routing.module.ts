import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from '../app/components/test/test.component';
import { CarReservationComponent } from './car-reservation/car-reservation.component';
import { CarInfoComponent } from './components/car-info/car-info.component';

const routes: Routes = [
  { path: 'owner', component: TestComponent },
  { path: '', component: CarReservationComponent },
  { path: 'cars', component: CarInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
