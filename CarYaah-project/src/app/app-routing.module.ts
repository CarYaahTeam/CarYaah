import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import {TestComponent} from "../app/components/test/test.component"

const routes: Routes = [
  
  {path: '', component: TestComponent}


];
=======
import { CarReservationComponent } from './car-reservation/car-reservation.component';

const routes: Routes = [{ path: '', component: CarReservationComponent }];
>>>>>>> 1244705122970ab5ee19b8a0ea5e374b7eae8d63

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
