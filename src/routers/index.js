import { Router } from 'express';
import usersRouter from './users.js';
import authRouter from './auth.js';
import diariesRouter from './diaries.js';

const router = Router();

router.use('/contacts', usersRouter);
router.use('/auth', authRouter);

router.use('/diaries', diariesRouter);

export default router;
