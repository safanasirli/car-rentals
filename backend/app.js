const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cors = require('cors')
app.use(cors())

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://safa:Wj1S0Prpt6kXsALV@cluster0.15g5i.mongodb.net/car-rentals?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log("Connection failed")
  })

const carsRoutes = require('./controllers/carController.js')
app.use("/api/cars", carsRoutes);

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

module.exports = app;
