const express = require('express');
const router = express.Router();
const commentController = require('../controller/commentController');

// Route to create a new comment
router.post('/new', commentController.createComment);

// Route to get all comments
router.get('/getall', commentController.getAllComments);

module.exports = router;
