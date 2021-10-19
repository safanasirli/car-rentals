const express = require("express");
const app = express();
var cors = require('cors')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors())
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://safa:Wj1S0Prpt6kXsALV@cluster0.15g5i.mongodb.net/car-rentals?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log("Connection failed")
  })


const Car = require('./models/car')
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/cars", (req, res, next) => {
  const car = new Car({
    title: req.body.title,
    description: req.body.description,
    img: req.body.img
  });
  car.save().then(result => {
    res.status(201).json({
      message: 'Car added successfully',
      carId: createdCar._id
    });
  });

});
app.put("/api/cars/:id", (req, res, next) => {
  const car = new Car({
    _id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    img: req.body.img
  })
  Car.updateOne({ _id: req.params.id }, car).then(updatedCar => {
    req.status(200).json({ message: 'Car data Updated' })
  })
})
app.get("/api/cars", (req, res, next) => {
  Car.find()
    .then(cars => {
      console.log(cars)
      res.status(200).json({
        message: "Cars fetched successfully!",
        cars: cars
      });
    });
});

app.get("/api/cars/:id", (req, res, next) => {
  Car.findById(req.params.id).then(car => {
    if (car) {
      res.status(200).json(car)
    } else {
      res.status(404).json({ message: 'Car not found!' });
    }
  })
})
//Delete

app.delete("/api/cars/:id", (req, res, next) => {
  Car.deleteOne({ _id: req.params.id }).then(deletedCar => {
    console.log(deletedCar)
    res.status(200).json({ message: "Car Deleted!" })
  })
});
module.exports = app;
