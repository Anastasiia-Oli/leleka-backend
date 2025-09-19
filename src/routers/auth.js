import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserSchema } from '../validation/auth.js';
import { registerUserController, logoutController } from '../controllers/auth.js';
import { authenticate } from '../middlewares/authenticate.js';

const authRouter = Router();

authRouter.post('/register', validateBody(registerUserSchema), registerUserController);

authRouter.post('/logout', authenticate, logoutController);

export default authRouter;
