// Importing important packages
const express = require('express');

// Using express and routes
const app = express();
const carRoute = express.Router();

// Car module which is required and imported
let carModel = require('../Models/cars');

// To Get List Of Cars
carRoute.route('/').get(function (req, res) {
    carModel.find(function (err, car) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(car);
        }
    });
});

// To Add New Car
carRoute.route('/addCar').post(function (req, res) {
    let car = new carModel(req.body);
    car.save()
        .then(data => {
            res.status(200).json({ 'car': 'Car Added Successfully' });
        })
        .catch(err => {
            res.status(400).send("Something Went Wrong");
        });
});

// To Get Car Details By Car ID
carRoute.route('/editCar/:id').get(function (req, res) {
    let id = req.params.id;
    carModel.findById(id, function (err, car) {
        res.json(car);
    });
});

// To Update The Car Details
carRoute.route('/updateCar/:id').post(function (req, res) {
    carModel.findById(req.params.id, function (err, car) {
        if (!car)
            return next(new Error('Unable To Find Car With This Id'));
        else {
            car.title = req.body.title;
            car.description = req.body.description;
            car.img = req.body.img;

            car.save().then(data => {
                res.json('Car Updated Successfully');
            })
                .catch(err => {
                    res.status(400).send("Unable To Update Car");
                });
        }
    });
});

// To Delete The Car
carRoute.route('/deleteCar/:id').get(function (req, res) {
    carModel.findByIdAndRemove({ _id: req.params.id }, function (err, car) {
        if (err) res.json(err);
        else res.json('Car Deleted Successfully');
    });
});

module.exports = carRoute;

