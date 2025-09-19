import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { createTaskSchema } from '../validation/tasks.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createTaskController,
  getTaskController,
  updateTaskStatusController,
} from '../controllers/tasks.js';

const tasksRouter = Router();

tasksRouter.post(
  '/',
  validateBody(createTaskSchema),
  ctrlWrapper(createTaskController),
);
tasksRouter.get('/', ctrlWrapper(getTaskController));
tasksRouter.patch('/:id', ctrlWrapper(updateTaskStatusController));

export default tasksRouter;
