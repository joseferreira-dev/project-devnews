import express from 'express';

import db from './src/database/db.js';
import userRoute from './src/routes/userRoute.js';

const app = express();
const port = 3000;

db.connectDatabase();

app.use(express.json());

app.use('/user', userRoute);

app.listen(port, () => {
  console.log(`App listening os port ${port}`);
});
