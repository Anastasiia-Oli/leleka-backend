import express from 'express';
import { getWeek, getBabyWeek, getMomWeek } from '../controllers/weeks.js';
import { ctrlWrapper } from '../controllers/ctrlWrapper.js';

const weeksRouter = express.Router();

weeksRouter.get(
  '/:weekNumber',
  (req, res, next) => {
    req.user = { dueDate: '2025-12-01' };
    next();
  },
  ctrlWrapper(getWeek),
);

weeksRouter.get('/public/:weekNumber', ctrlWrapper(getWeek));
weeksRouter.get('/baby/:weekNumber', ctrlWrapper(getBabyWeek));
weeksRouter.get('/mom/:weekNumber', ctrlWrapper(getMomWeek));

export default weeksRouter;
