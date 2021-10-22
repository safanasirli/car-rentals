const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://safa:"+ process.env.MONGO_PASSWORD+"@cluster0.15g5i.mongodb.net/car-rentals?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log("Connection failed")
  })

const carsRoutes = require('./controllers/carController.js')
app.use("/api/cars", carsRoutes);

module.exports = app;