const express = require("express");

const router = express.Router();

const Car = require('../models/car')

router.post("", (req, res, next) => {
    const car = new Car({
        title: req.body.title,
        description: req.body.description,
        img: req.body.img,
        price: req.body.price,
    });
    car.save().then(result => {
        res.status(201).json({
            message: 'Car added successfully',
            carId: createdCar._id
        });
    });

});
router.put("/:id", (req, res, next) => {
    const car = new Car({
        _id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        img: req.body.img,
        price: req.body.price,
    })
    Car.updateOne({ _id: req.params.id }, car).then(updatedCar => {
        req.status(200).json({ message: 'Car data Updated' })
    })
})
router.get("", (req, res, next) => {
    Car.find()
        .then(cars => {
            console.log(cars)
            res.status(200).json({
                message: "Cars fetched successfully!",
                cars: cars
            });
        });
});

router.get("/:id", (req, res, next) => {
    Car.findById(req.params.id).then(car => {
        if (car) {
            res.status(200).json(car)
        } else {
            res.status(404).json({ message: 'Car not found!' });
        }
    })
})
//Delete

router.delete("/:id", (req, res, next) => {
    Car.deleteOne({ _id: req.params.id }).then(deletedCar => {
        console.log(deletedCar)
        res.status(200).json({ message: "Car Deleted!" })
    })
});

module.exports = router