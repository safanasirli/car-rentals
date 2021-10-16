import { Component, EventEmitter, Output } from '@angular/core'

import {Car} from '../cars.model';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})

export class CarCreateComponent {
  enteredTitle = ""
  enteredDescription = ""
  enteredImg = ""

  @Output() createdCar = new EventEmitter<Car>();
  onCreateCar() {
    const car: Car= {
      title: this.enteredTitle,
      description: this.enteredDescription,
      img: this.enteredImg
    }
    this.createdCar.emit(car);
  }
}
