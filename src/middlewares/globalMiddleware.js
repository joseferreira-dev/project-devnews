import mongoose from 'mongoose';
import userService from '../services/userService.js';

export const validId = (req, res, next) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: 'Invalid ID' });
    }

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export const validUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await userService.findById(id);

    if (!user) {
      return res.status(400).send({ message: 'User not found' });
    }

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}
