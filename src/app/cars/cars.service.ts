import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Car } from "./cars.model";

@Injectable({ providedIn: "root" })
export class CarsService {
  private cars: Car[] = [];
  private carsUpdated = new Subject<Car[]>();

  constructor(private http: HttpClient) { }

  getCars() {
    this.http.get<{ message: string; cars: Car[] }>(
      "http://localhost:3000/api/cars"
    )
      .subscribe(carData => {
        this.cars = carData.cars;
        this.carsUpdated.next([...this.cars]);
      });
  }

  getCarUpdateListener() {
    return this.carsUpdated.asObservable();
  }

  addCar(title: string, description: string, img: string) {
    const car: Car = { id: null, title: title, description: description, img: img }
    this.http.post<{ message: string }>("http://localhost:3000/api/cars", car)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.cars.push(car);
        this.carsUpdated.next([...this.cars]);
      });
  }
}
