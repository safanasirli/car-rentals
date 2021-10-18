const express = require("express");
const app = express();

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
  const car = req.body;
  console.log(car);
  res.status(201).json({
    message: 'Car added successfully'
  });
});

app.get("/api/cars", (req, res, next) => {
  const cars = [
    {
      id: "01111",
      title: "  Range Rover",
      description: "This is a perfect car!",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.carwale.com%2Fland-rover-cars%2Frange-rover-2014-2018%2Fimages%2F&psig=AOvVaw18Ihp4TWJZNdGiAnn-NSsc&ust=1634686805380000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMiEv4SR1fMCFQAAAAAdAAAAABAD"
    },
    {
      id: "01112",
      title: "  Range Rover",
      description: "This is a perfect car!",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.carwale.com%2Fland-rover-cars%2Frange-rover-2014-2018%2Fimages%2F&psig=AOvVaw18Ihp4TWJZNdGiAnn-NSsc&ust=1634686805380000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMiEv4SR1fMCFQAAAAAdAAAAABAD"
    }
  ];
  res.status(200).json({
    message: "Cars fetched successfully!",
    cars: cars
  });
});

module.exports = app;
