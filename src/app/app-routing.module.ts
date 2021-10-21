import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarCreateComponent } from './cars/car-create/car-create.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarInfoComponent } from './cars/car-info/car-info.component';

const routes: Routes = [
  { path: '', component: CarListComponent },
  { path: 'add', component: CarCreateComponent },
  { path: 'edit/:carId', component: CarCreateComponent },
  { path: 'car/:carId', component: CarInfoComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
