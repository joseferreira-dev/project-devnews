import News from '../models/News.js';

const create = (body) => {
  return News.create(body);
}

const findAll = () => {
  return News.find();
}

export default {
  create,
  findAll
}
