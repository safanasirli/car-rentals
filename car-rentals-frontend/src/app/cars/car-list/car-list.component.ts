import { Component,OnInit,OnDestroy} from '@angular/core';
import {Subscription } from 'rxjs';
import { Car } from '../cars.model';
import { CarsService } from '../cars.service'
@Component({
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit,OnDestroy{

cars: Car[] = [];
private carsSub: Subscription;
  constructor(public carsService: CarsService) {
  }
  ngOnInit(){
    this.cars = this.carsService.getCars()
    this.carsSub =  this.carsService.getCarUpdateListener()
    .subscribe((cars:Car[])=>{
      this.cars=cars
    })
  }
  ngOnDestroy(){
    this.carsSub.unsubscribe()
  }
}
