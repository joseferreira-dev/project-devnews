const userService = require('../services/userService');
const mongoose = require('mongoose');

const create = async (req, res) => {
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
}

const findAll = async (req, res) => {
  const users = await userService.findAll();

  if (users.length === 0) {
    return res.status(400).send({ message: 'There are no registered users' });
  }

  res.send(users);
}

const findById = async (req, res) => {
  const id = req.params.id;

  const user = await userService.findById(id);

  res.send(user);
}

const update = async (req, res) => {
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
}

module.exports = {
  create,
  findAll,
  findById,
  update
}
