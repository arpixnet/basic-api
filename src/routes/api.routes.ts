import {Router} from 'express';
import {
    prueba
} from '../controllers/prueba.controller';

const router = Router();

router.post('/prueba', prueba);

export default router;