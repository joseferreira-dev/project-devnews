import { Router } from 'express';

const router = Router();

import userController from '../controllers/userController.js';
import { validId, validUser } from '../middlewares/globalMiddleware.js';

router.post('/', userController.create);
router.get('/', userController.findAll);
router.get('/:id', validId, validUser, userController.findById);
router.patch('/:id', validId, validUser, userController.update);

export default router;
