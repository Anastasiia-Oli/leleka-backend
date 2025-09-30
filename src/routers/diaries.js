import express from 'express';
import {
  createDiary,
  getDiaries,
  updateDiary,
  deleteDiary,
} from '../controllers/diaries.js';
import { diarySchema } from '../validation/diaries.js';
import { authenticate } from '../middlewares/authenticate.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = express.Router();

router.use(authenticate); // всі ендпоінти приватні

// POST /diaries
router.post('/', validateBody(diarySchema), createDiary);

// GET /diaries
router.get('/', getDiaries);

// PATCH /diaries/:id
router.patch('/:id', validateBody(diarySchema), updateDiary);

// DELETE /diaries/:id
router.delete('/:id', deleteDiary);

export default router;
