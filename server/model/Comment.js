const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  trainingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Formation' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  comment: String,
  rating : Number,
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;

