import User from '../models/User.js';

const login = (email) => {
  return User.findOne({ email: email }).select("+password");
}

export default {
  login
}
