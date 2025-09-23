import { Router } from 'express';
import usersRouter from './users.js';
import authRouter from './auth.js';
import tasksRouter from './tasks.js';
import weeksRouter from './weeks.js';

const router = Router();

router.use('/contacts', usersRouter);
router.use('/auth', authRouter);
router.use('/tasks', tasksRouter);
router.use('/weeks', weeksRouter);

export default router;
