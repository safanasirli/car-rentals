import { Component, EventEmitter, Output } from '@angular/core'
import { NgForm } from '@angular/forms';

import { Car } from '../cars.model';

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
  onCreateCar(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const car: Car = {
      title: form.value.title,
      description: form.value.description,
      img: form.value.img
    }
    this.createdCar.emit(car);
  }
}
