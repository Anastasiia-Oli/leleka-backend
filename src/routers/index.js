import { Router } from 'express';
import usersRouter from './users.js';
import authRouter from './auth.js';
import diariesRouter from './diaries.js';
import tasksRouter from './tasks.js';
import emotionsRouter from './emotions.js';

const router = Router();

router.use('/contacts', usersRouter);
router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/tasks', tasksRouter);
router.use('/diaries', diariesRouter);
router.use('/emotions', emotionsRouter);

export default router;
