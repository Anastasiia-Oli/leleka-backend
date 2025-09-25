import express from 'express';
import { getAllEmotions } from '../controllers/emotions.js';

const router = express.Router();

// GET /api/emotions
router.get('/', getAllEmotions);

export default router;
