const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose.connect(
    'mongodb+srv://joseguedesdev:senha123@testes.io0id7o.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Database connected'))
  .catch((error) => console.log(error));
}

module.exports = { connectDatabase };
