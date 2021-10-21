import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../cars.model'
import { CarsService } from '../cars.service';

@Component({
    selector: 'car-info',
    templateUrl: './car-info.component.html',
    styleUrls: ['./car-info.component.css']
})

export class CarInfoComponent implements OnInit {
    car: Car
    constructor(public carsService: CarsService, private route: ActivatedRoute,) {
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('carId');
        this.carsService.getCar(id)
            .subscribe((carData) => {
                this.car = { id: carData._id, title: carData.title, description: carData.description, img: carData.img }
            })
    }

}