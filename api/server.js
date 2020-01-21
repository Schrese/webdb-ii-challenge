const express = require('express');
const helmet = require('helmet');

const CarsRouter = require('../cars/cars-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', CarsRouter);

server.get('/', (req, res) => {
    res.send('<h2>Database Schema Design Project </h2>')
})

module.exports = server;