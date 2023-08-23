const express = require('express');
const router = express.Router();
const factory = require('../controller/factory');
const formations = require('../model/formation');

// Create a new training
router.post('/createtraining', factory.createOne(formations));

// Get all trainings
// error on this route idk why 
router.get('/getalltraining', factory.getAll(formations))

// Get a specific training by ID
router.get('/training/:id', factory.getOne(formations));

// Update a training by ID
router.put('/training/:id', factory.updateOne(formations));

// Delete a training by ID
router.delete('/training/:id', factory.deleteOne(formations));

// Delete all trainings
//error on this route idk why 
router.delete('/trainings', factory.deleteAll(formations));

module.exports = router;
