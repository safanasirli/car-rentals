import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../cars.model'
import { CarsService } from '../cars.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'car-info',
    templateUrl: './car-info.component.html',
    styleUrls: ['./car-info.component.css']
})

export class CarInfoComponent implements OnInit, OnDestroy {
    car: Car
    cars: Car[] = []
    private carsSub: Subscription
    constructor(public carsService: CarsService, private route: ActivatedRoute) {
    }

    ngOnInit() {

        const id = this.route.snapshot.paramMap.get('carId');

        this.carsService.getCar(id)
            .subscribe((carData) => {
                this.car = { id: carData._id, title: carData.title, description: carData.description, img: carData.img, price: carData.price }
            })
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

}