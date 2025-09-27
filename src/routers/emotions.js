import express from 'express';
import { getAllEmotions } from '../controllers/emotions.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = express.Router();

// GET /api/emotions
router.get('/', authenticate, getAllEmotions);

export default router;
