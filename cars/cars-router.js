const express = require('express');

const db = require('../data/db-config.js')

const router = express.Router();

router.get('/', (req, res) => {
    db.select('*').from('car')
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            console.log('error getting cars', err)
            res.status(500).json({ errorMessage: 'Error getting the cars' })
        })
})

router.post('/', (req, res) => {
    const carData = req.body;
    db('car').insert(carData, 'id')
        .then(ids => {
            const id = ids[0]
            return db('car').where({id}).first().select('id', 'VIN', 'make', 'model', 'mileage', 'transmission', 'status').then(newCar => {
                res.status(201).json(newCar)
            })
        })
        .catch(err => {
            console.log('error posting new car', err)
            res.status(500).json({ message: 'Failed to store car' })
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    db('car').where({ id: id }).update(changes)
        .then(updatedCar => {
            res.status(200).json({ message: 'Car was updated' })
        })
        .catch(err => {
            console.log('error updating car', err)
            res.status(500).json({ errorMessage: 'Car could not be updated' })
        })
})

module.exports = router;