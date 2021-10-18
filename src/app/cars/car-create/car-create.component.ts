import { Component } from '@angular/core'
import { NgForm } from '@angular/forms';

import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})

export class CarCreateComponent {
  enteredTitle = ""
  enteredDescription = ""
  enteredImg = ""

  constructor(public carsService: CarsService) { }

  onCreateCar(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.carsService.addCar(form.value.title, form.value.description, form.value.img)
    form.resetForm();
  }
}
