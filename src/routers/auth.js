// import { Router } from 'express';

// const authRouter = Router();

// export default authRouter;


import express from 'express';
import { loginUser } from '../controllers/auth.js';

const router = express.Router();

// POST /api/auth/login
router.post('/login', loginUser);

export default router;
