const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3003;

// Mongoose configuration
mongoose.connection.on('error', err => console.log(err.message + ' is mongo not running?'));
mongoose.connection.on('disconnected', () => console.log('mongoose is disconnected'));

mongoose.connect('mongodb://localhost:27017/cars', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongoose!!')
});

// Require the error handlers
const {
    handleErrors,
    handleValidationErrors
} = require('./middleware/custom_errors');
// Handling Errors 
app.use(handleValidationErrors);
app.use(handleErrors);

app.use('/api/cars', (req, res, next) => {
    cars = [
        { id: '00001', title: "Range Rover", description: "Good car!", img: "https://m.economictimes.com/thumb/msid-69429504,width-1200,height-900,resizemode-4,imgsize-586493/jlr-unveils-petrol-variant-of-range-rover-sport-at-rs-86-71-lakh.jpg" },
        { id: '00002', title: "Range Rover", description: "Good car!", img: "https://m.economictimes.com/thumb/msid-69429504,width-1200,height-900,resizemode-4,imgsize-586493/jlr-unveils-petrol-variant-of-range-rover-sport-at-rs-86-71-lakh.jpg" }
    ]
    res.json(cars);
    next()
})
app.listen(PORT, () => {
    console.log(`PORT: ${PORT}`);
});