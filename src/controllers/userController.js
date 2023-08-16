import userService from '../services/userService.js';
import mongoose from 'mongoose';

const create = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
      res.status(400).send({ message: 'Submit all fields for registration' });
    }

    const user = await userService.create(req.body);

    if (!user) {
      return res.status(400).send({ message: 'Error while creating user' });
    }

    res.status(201).send({
      message: 'User created sucessfully',
      user: {
        id: user._id,
        name,
        username,
        email,
        avatar,
        background
      }
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

const findAll = async (req, res) => {
  try {
    const users = await userService.findAll();

    if (users.length === 0) {
      return res.status(400).send({ message: 'There are no registered users' });
    }

    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

const findById = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await userService.findById(id);

    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

const update = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name && !username && !email && !password && !avatar && !background) {
      res.status(400).send({ message: 'Submit at leats one field for update' });
    }

    const id = req.params.id;

    await userService.update(
      id,
      name,
      username,
      email,
      password,
      avatar,
      background
    );

    res.status(201).send({ message: 'User updated sucessfully' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export default {
  create,
  findAll,
  findById,
  update
}
