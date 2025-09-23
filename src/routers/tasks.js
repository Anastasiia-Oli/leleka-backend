import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { createTaskSchema, updateStatusSchema } from '../validation/tasks.js';
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
tasksRouter.patch(
  '/:id/status',
  validateBody(updateStatusSchema),
  ctrlWrapper(updateTaskStatusController),
);

export default tasksRouter;
