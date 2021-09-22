import { Router } from 'express';
import { save } from '../controllers/order.controller';

const router = Router();

router.post('/',save);

export default router;