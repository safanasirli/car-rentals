import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { CarsService } from '../cars.service';
import { Car } from '../cars.model';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})

export class CarCreateComponent implements OnInit {
  enteredTitle = ""
  enteredDescription = ""
  enteredImg = ""
  car: Car;
  private mode = 'add';
  private carId: string;

  constructor(public carsService: CarsService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('carId')) {
        this.mode = 'edit';
        this.carId = paramMap.get('carId');
        this.carsService.getCar(this.carId).subscribe(carData => {
          this.car = { id: carData._id, title: carData.title, description: carData.description, img: carData.img }
        })
      } else {
        this.mode = 'add';
        this.carId = null
      }
    });
  }
  onSaveCar(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if (this.mode === 'add') {
      this.carsService.addCar(form.value.title, form.value.description, form.value.img)

    } else {
      this.carsService.updateCar(this.carId, form.value.title, form.value.description, form.value.img)
    }
    form.resetForm();
  }
}
