import { Router } from 'express';

const router = Router();

import newsController from '../controllers/newsController.js';

router.get('/', newsController.findAll);
router.post('/', newsController.create);

export default router;
