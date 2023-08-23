const express = require('express');
const factory = require('../controller/factory');
const router = express.Router();
const user = require('../model/user')

// Create a new user
router.post('/create', factory.createOne(user));

// Get all users
router.get('/getall', factory.getAllstudent(user));

// Get a specific user by ID
router.get('/:id', factory.getOne(user));

// Update a user by ID
router.put('/:id', factory.updateOne(user));

// Delete a user by ID
router.delete('/:id', factory.deleteOne(user));

// Delete all users
router.delete('/user', factory.deleteAll(user));

module.exports = router;
