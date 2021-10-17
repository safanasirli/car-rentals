const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

// index route
router.get('/', (req, res, next) => {
    Car.find({})
        .then(cars => res.json(cars))
        .catch(next)
});

// show route
router.get('/:id', (req, res, next) => {
    Car.findById(req.params.id)
        .then(car => res.json(car))
        .catch(next)
});

// post route
router.post('/', (req, res, next) => {
    Car.create(req.body)
        .then(car => res.json(car))
        .catch(next)
});

// delete route
router.delete('/:id', (req, res, next) => {
    Car.findOneAndDelete({ _id: req.params.id })
        .then(deletedCar => res.json(deletedCar))
        .catch(next)
});

// put route
router.put('/:id', (req, res, next) => {
    Car.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedCar => res.json(updatedCar))
        .catch(next)
});


module.exports = router;