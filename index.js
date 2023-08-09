const express = require('express');
const app = express();

const db = require('./src/database/db');

const userRoute = require('./src/routes/userRoute');

const port = 3000;

db.connectDatabase();

app.use(express.json());

app.use('/user', userRoute);

app.listen(port, () => {
  console.log(`App listening os port ${port}`);
});
