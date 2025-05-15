import { Router } from 'express';
import { loadData } from '../controllers/load.controller';
import { wrapAsync } from '../utils/wrapAsync';

const router = Router();

router.get('/load', wrapAsync(loadData));

export default router;
