import { Component } from '@angular/core';

import { Car } from './cars/cars.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedCars: Car[] = [];

  onCarAdded(car) {
    this.storedCars.push(car)
  }
}
