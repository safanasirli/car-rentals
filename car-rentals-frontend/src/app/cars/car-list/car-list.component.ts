import { Component, Input } from '@angular/core';
import {Car } from '../cars.model'
@Component({
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent {
  // cars = [
  //   { title: 'RangeRover', description: 'The best Car', img: 'https://img.etimg.com/thumb/msid-69429504,width-650,imgsize-586493,,resizemode-4,quality-100/jlr-unveils-petrol-variant-of-range-rover-sport-at-rs-86-71-lakh.jpg' },
  //   { title: 'Tesla Model 3', description: "Safety is the most important part of the overall Model 3 design. The metal structure is a combination of aluminum and steel, for maximum strength in every area. In a roof-crush test, Model 3 resisted four times its own mass, even with an all-glass roof: that's the same weight as two full-grown African elephants.", img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model3-lt-airporthero-low-101-1587061146.jpg?crop=1.00xw:1.00xh;0,0&resize=2048:*' }
  // ];
  @Input() cars: Car[] = [];

}
