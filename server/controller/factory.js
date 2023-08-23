const asyncHandler = require('express-async-handler');


exports.deleteOne = (Model) =>
  asyncHandler(async (req, res) => {
    try {
      const userId = req.params.id;
      const deletedUser = await Model.findByIdAndRemove(userId);
      if (!deletedUser) {
        return res.status(404).json({ error: 'data not found' });
      }
      res.json({ message: 'data deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the data' });
    }
  });

exports.updateOne = (Model) =>
  asyncHandler(async (req, res) => {
    try {
      const userId = req.params.id;
      const userData = req.body;
      const updatedUser = await Model.findByIdAndUpdate(userId, userData, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ error: 'not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the data' });
    }
  });

exports.createOne = (Model) =>
  asyncHandler(async (req, res) => {
    const newDoc = await Model.create(req.body);
    res.status(201).json({ data: newDoc });
  });

exports.getOne = (Model) =>
  asyncHandler(async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await Model.findById(userId);
    if (!user) {
      return res.status(404).json({ error: ' not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the data' });
  }
});

exports.getAllstudent =  (Model) =>
    asyncHandler(async (req, res) => {
  try {
    const users = await Model.find({role:"student"});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
})
exports.getAll =  (Model) =>
    asyncHandler(async (req, res) => {
  try {
    const users = await Model.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
})

  exports.deleteAll = (Model) =>
  asyncHandler(async (req, res) => {
    try {
      await Model.deleteMany({});
      res.json({ message: 'All  deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: ' error occurred while deleting all data' });
    }
  });
