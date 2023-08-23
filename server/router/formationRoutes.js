const express = require('express');
const router = express.Router();
const factory = require('../controller/factory');
const formations = require('../model/formation')


  
// Create a new user
router.post('/createtraining', factory.createOne(formations));

// Get all users
router.get('/getalltraining', factory.getAll(formations));

// Get a specific user by ID
router.get('training/:id', factory.getOne(formations));

// Update a user by ID
router.put('training/:id', factory.updateOne(formations));

// Delete a user by ID
router.delete('training/:id', factory.deleteOne(formations));

// Delete all users
router.delete('/training', factory.deleteAll(formations));


  

module.exports = router;
