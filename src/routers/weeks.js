import express from 'express';
import { getWeek, getBabyWeek, getMomWeek } from '../controllers/weeks.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { weekNumberParamSchema } from '../validation/weeks.js';
import { validateParams } from '../middlewares/validateParams.js';
import { authenticate } from '../middlewares/authenticate.js';

const weeksRouter = express.Router();

weeksRouter.get(
  '/public/:weekNumber',
  validateParams(weekNumberParamSchema),
  ctrlWrapper(getWeek),
);

weeksRouter.get(
  '/:weekNumber',
  authenticate,
  validateParams(weekNumberParamSchema),
  ctrlWrapper(getWeek),
);

weeksRouter.get(
  '/baby/:weekNumber',
  authenticate,
  validateParams(weekNumberParamSchema),
  ctrlWrapper(getBabyWeek),
);

weeksRouter.get(
  '/mom/:weekNumber',
  authenticate,
  validateParams(weekNumberParamSchema),
  ctrlWrapper(getMomWeek),
);

export default weeksRouter;
