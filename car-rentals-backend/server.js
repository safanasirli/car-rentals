// Imported required packages
const express = require('express')
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose');

// MongoDB Databse url
const mongoDatabase = 'mongodb://localhost:27017/carDetails';

// Created express server
const app = express();
mongoose.Promise = global.Promise;

// Connect Mongodb Database
mongoose.connect(mongoDatabase, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('There is problem while connecting database ' + err) }
);

// All the express routes
const carRoutes = require('./Controllers/carControllers');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Enabled CORS
app.use(cors());

// Setup for the server port number
const port = process.env.PORT || 4000;

// Routes Configuration
app.use('/cars', carRoutes);

// Staring our express server
app.listen(port, function () {
  console.log('Server Listening On Port : ' + port);
});