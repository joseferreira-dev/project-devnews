import express from 'express';

const route = express.Router();

import userController from '../controllers/userController.js';
import { validId, validUser } from '../middlewares/globalMiddleware.js';

route.post('/', userController.create);
route.get('/', userController.findAll);
route.get('/:id', validId, validUser, userController.findById);
route.patch('/:id', validId, validUser, userController.update);

export default route;
