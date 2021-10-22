const app = require("./backend/app");
const express = require('express');
const http = require("http");
const cors = require('cors')

const whitelist = ['http://localhost:4200', 'https://safanasirli-car-rentals.herokuapp.com/api/cars/']
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
app.use(express.static('./dist/car-rentals-frontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/car-rentals-frontend/' }),
);

const port = (process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.listen(port);