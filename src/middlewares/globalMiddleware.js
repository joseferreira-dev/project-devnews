const userService = require('../services/userService');
const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'Invalid ID' });
  }

  next();
}

const validUser = async (req, res, next) => {
  const id = req.params.id;

  const user = await userService.findById(id);

  if (!user) {
    return res.status(400).send({ message: 'User not found' });
  }

  next();
}

module.exports = {
  validId,
  validUser
}
