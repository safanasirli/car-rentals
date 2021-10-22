import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Car } from "./cars.model";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class CarsService {
  private cars: Car[] = [];
  private carsUpdated = new Subject<Car[]>();

  constructor(private http: HttpClient, private router: Router) { }

  getCars() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    this.http.get<{ message: string; cars: any }>(
      "https://safanasirli-car-rentals.herokuapp.com/api/cars")
      .pipe(map((carData) => {
        return carData.cars.map(car => {
          return {
            title: car.title,
            description: car.description,
            img: car.img,
            id: car._id,
            price: car.price
          }
        })
      }))
      .subscribe(newCars => {
        this.cars = newCars;
        this.carsUpdated.next([...this.cars]);
      });
  }

  getCarUpdateListener() {
    return this.carsUpdated.asObservable();
  }

  getCar(id: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.get<{ _id: string, title: string, description: string, img: string, price: number }>("https://safanasirli-car-rentals.herokuapp.com/api/cars/" + id)
  }


  updateCar(id: string, title: string, description: string, img: string, price: number) {
    const car: Car = { id: id, title: title, description: description, img: img, price: price }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    this.http.put("https://safanasirli-car-rentals.herokuapp.com/api/cars/" + id, car)
      .subscribe(res => {
        const updatedCars = [...this.cars]
        const oldCarIndex = updatedCars.findIndex(newCar => newCar.id === car.id);
        updatedCars[oldCarIndex] = car;
        this.cars = updatedCars;
        this.carsUpdated.next([...this.cars]);
      })
  }

  addCar(title: string, description: string, img: string, price: number) {
    const car: Car = { id: null, title: title, description: description, img: img, price: price }
    console.log(car)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    this.http.post<{ message: string, carId: string }>("https://safanasirli-car-rentals.herokuapp.com/api/cars", car)
      .subscribe(responseData => {
        const id = responseData.carId;
        car.id = id;
        this.cars.push(car);
        this.carsUpdated.next([...this.cars]);
        this.router.navigate(["/"])
      });
  }

  deleteCar(carId: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    this.http.delete("https://safanasirli-car-rentals.herokuapp.com/api/cars/" + carId)
      .subscribe(() => {
        const updatedCars = this.cars.filter(car => car.id !== carId);
        this.cars = updatedCars;
        this.carsUpdated.next([...this.cars])
        this.router.navigate(["/"])
      })
  }
}

