import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarCreateComponent } from './cars/car-create/car-create.component';
import { CarListComponent } from './cars/car-list/car-list.component';

const routes: Routes = [
  { path: '', component: CarListComponent },
  { path: 'host', component: CarCreateComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
