import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Car } from '../cars.model';
import { CarsService } from '../cars.service'
@Component({
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit, OnDestroy {

  cars: Car[] = [];
  private carsSub: Subscription;
  constructor(public carsService: CarsService) {
  }
  ngOnInit() {
    this.cars = this.cars.sort((low, high) => low.price - high.price);
    this.carsService.getCars()
    this.carsSub = this.carsService.getCarUpdateListener()
      .subscribe((cars: Car[]) => {
        this.cars = cars

      })
  }

  onDelete(carId: string) {
    this.carsService.deleteCar(carId)
  }
  ngOnDestroy() {
    this.carsSub.unsubscribe()
  }
  sort(Car) {

    switch (Car.target.value) {
      case "Low":
        {
          this.cars = this.cars.sort((low, high) => low.price - high.price);
          console.log(this.cars)
          break;
        }

      case "High":
        {
          this.cars = this.cars.sort((low, high) => high.price - low.price);
          break;
        }

      case "Relevance":
        {
          this.cars = this.cars.sort(function (low, high) {
            if (low.title < high.title) {
              return -1;
            }
            else if (low.title > high.title) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }

      default: {
        this.cars = this.cars.sort((low, high) => low.price - high.price);
        break;
      }

    }
    return this.cars;

  }

}


