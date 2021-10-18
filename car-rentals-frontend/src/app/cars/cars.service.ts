import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Car } from './cars.model';

@Injectable({ providedIn: 'root' })

export class CarsService {
  private cars: Car[] = [];
  private carsUpdated = new Subject<Car[]>();

 
    getCars() {
      return [...this.cars];
  }

  getCarUpdateListener(){
    return this.carsUpdated.asObservable()
  }
  addCar(title: string, description: string, img: string) {
    const car: Car = {title: title, description: description, img: img }
    this.cars.push(car)
    this.carsUpdated.next([...this.cars])
  }
}
