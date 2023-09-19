const express = require('express');
const factory = require('../controller/factory');
const router = express.Router();
const user = require('../model/user')
const bcrypt = require("bcrypt");
const User = require('../model/user');
// Create a new user
router.post('/createuser', async (req, res) => {
    try {
      const { firstname, lastname, email, password, university , role,formation } = req.body;
      console.log(req.body)
  
      // Hash the password before saving it
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds
        
      const newUser = new user({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        university,
        role,
      });

      newUser.formations.push(formation)

      console.log(newUser)
      const savedUser = await newUser.save();
  
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
  });
//get user role teacher 
router.get('/getteacher',async (req, res) =>{
  try {
    const teachers = await User.find({ role: 'teacher' }).populate('formations');
    res.status(200).json(teachers);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

// Get all users
router.get('/getall', factory.getAllstudent(user));

// Get a specific user by ID
router.get('/:id', factory.getOne(user));

// Update a user by ID
router.put('/:id', factory.updateOne(user));
// Update a user by ID
router.put('/formation/:id', factory.updateOneF(user));
router.put('/traininguser/:id',factory.updateOneUF(user))
// Delete a user by ID
router.delete('/:id', factory.deleteOne(user));

// Delete all users
router.delete('/user', factory.deleteAll(user));

module.exports = router;
