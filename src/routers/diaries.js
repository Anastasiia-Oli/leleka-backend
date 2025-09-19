import express from 'express';
import {
  createDiary,
  getDiaries,
  updateDiary,
  deleteDiary,
} from '../controllers/diaries.js';
import { diarySchema } from '../validation/diaries.js';
// import authenticate from '../middlewares/authenticate.js'; /==== тимчасово заглушено
import { validateBody } from '../middlewares/validateBody.js';

const router = express.Router();

// router.use(authenticate); // всі ендпоінти приватні

// Тимчасова заглушка для req.user
// =======================
// Додаємо перед кожним контролером, щоб контролери отримували req.user
const mockUserMiddleware = (req, res, next) => {
  req.user = { _id: '64f0c0d1f0a5b2c3d4e5f6a7' }; // будь-який тестовий ID
  next();
};

// POST /diaries
router.post(
  '/',
  validateBody(diarySchema),
  mockUserMiddleware, // <-- додано тут
  createDiary,
);

// GET /diaries
router.get(
  '/',
  mockUserMiddleware, // <-- додано тут
  getDiaries,
);

// PUT /diaries/:id
router.put(
  '/:id',
  validateBody(diarySchema),
  mockUserMiddleware, // <-- додано тут
  updateDiary,
);

// DELETE /diaries/:id
router.delete(
  '/:id',
  mockUserMiddleware, // <-- додано тут
  deleteDiary,
);

export default router;
