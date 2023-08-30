const express = require('express');
const router = express.Router();
const factory = require('../controller/factory');
const formations = require('../model/formation');

// Create a new training
router.post('/createtraining', factory.createOne(formations));

// Get all trainings
// error on this route idk why 
// router.get('/getalltrainings', async (req, res) => {
//     try {
//       const users = await formations.find();
//       res.json(users);
//     } catch (error) {
//       res.status(400).json({ error: 'An error occurred while fetching data' });
//     }
//   })

// Get a specific training by ID
router.get('/training/:id', factory.getOne(formations));

// Update a training by ID
router.put('/training/:id', factory.updateOne(formations));

// Delete a training by ID
router.delete('/training/:id', factory.deleteOne(formations));

// Delete all trainings
//error on this route idk why 
// router.delete('/trainings', async (res) => {
//     try {
//       await formations.deleteMany({});
//       res.json({ message: 'All  deleted successfully' });
//     } catch (error) {
//       res.status(500).json({ error: ' error occurred while deleting all data' });
//     }
//   });

module.exports = router;
