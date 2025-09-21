import { Router } from 'express';
import { logoutController } from '../controllers/auth.js';
import { authenticate } from '../middlewares/authenticate.js';

const authRouter = Router();

authRouter.post('/logout', authenticate, logoutController);

export default authRouter;
