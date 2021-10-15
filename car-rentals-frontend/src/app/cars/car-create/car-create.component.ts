import { Component, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})

export class CarCreateComponent {
  enteredTitle = ""
  enteredDescription = ""
  enteredImg = ""

  createdCar = new EventEmitter();
  onCreateCar() {
    const car = {
      title: this.enteredTitle,
      description: this.enteredDescription,
      img: this.enteredImg
    }
    this.createdCar.emit(car);
  }
}
