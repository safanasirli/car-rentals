const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
});

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;