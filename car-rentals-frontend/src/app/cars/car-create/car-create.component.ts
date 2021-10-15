import { Component } from '@angular/core'

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})

export class CarCreateComponent {
  enteredValue = ""
  newCar = '';
  onCreateCar() {
    this.newCar = this.enteredValue
  }
}
