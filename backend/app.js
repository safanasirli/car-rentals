const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cors = require('cors')
const whitelist = ['http://localhost:4200' || "https://safanasirli-car-rentals.herokuapp.com/"]
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://safa:" + process.env.MONGO_PASSWORD + "@cluster0.15g5i.mongodb.net/car-rentals?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log("Connection failed")
  })

const carsRoutes = require('./controllers/carController.js')
app.use("/api/cars/", carsRoutes);

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