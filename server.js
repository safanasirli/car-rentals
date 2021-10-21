const app = require("./backend/app");
const express = require('express');
const http = require("http");

app.use(express.static('./dist/car-rentals-frontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/car-rentals-frontend/'}),
);

const port = (process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.listen(port);