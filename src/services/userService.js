const User = require('../models/User');

const create = (body) => {
  return User.create(body);
}

module.exports = {
  create,
}
