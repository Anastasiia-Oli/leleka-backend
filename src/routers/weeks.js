import express from 'express';
import { getWeek, getBabyWeek, getMomWeek } from '../controllers/weeks.js';

const weeksRouter = express.Router();

// (authMiddleware)
weeksRouter.get(
  '/:weekNumber',
  (req, res, next) => {
    req.user = { dueDate: '2025-12-01' }; // заглушка
    next();
  },
  getWeek,
);

weeksRouter.get('/public/:weekNumber', getWeek);

weeksRouter.get('/baby/:weekNumber', getBabyWeek);
weeksRouter.get('/mom/:weekNumber', getMomWeek);

export default weeksRouter;
