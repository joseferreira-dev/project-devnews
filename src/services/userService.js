const User = require('../models/User');

const create = (body) => {
  return User.create(body);
}

const findAll = () => {
  return User.find();
}

const findById = (id) => {
  return User.findById(id);
}

module.exports = {
  create,
  findAll,
  findById
}
