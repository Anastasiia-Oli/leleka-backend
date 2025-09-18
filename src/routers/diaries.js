import express from 'express';
import {
  createDiary,
  getDiaries,
  updateDiary,
  deleteDiary,
} from '../controllers/diaries.js';
import { diarySchema } from '../validation/diaries.js';
import authenticate from '../middlewares/authenticate.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = express.Router();

router.use(authenticate); // всі ендпоінти приватні

router.post('/', validateBody(diarySchema), createDiary);
router.get('/', getDiaries);
router.put('/:id', validateBody(diarySchema), updateDiary);
router.delete('/:id', deleteDiary);

export default router;
