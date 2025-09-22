import { Router } from 'express';
import { authenticateToken } from '../middlewares/auth.js';
import {
  getCurrentUser,
  updateUserData,
  updateUserAvatar,
} from '../controllers/users.js';
import { upload } from '../middlewares/multer.js';
import { validateBody } from '../middlewares/validateBody.js';
import { updateSchema } from '../validation/users.js';

const usersRouter = Router();

usersRouter.get('/current', authenticateToken, getCurrentUser);
usersRouter.patch(
  '/',
  authenticateToken,
  validateBody(updateSchema),
  updateUserData,
);
usersRouter.patch(
  '/avatar',
  authenticateToken,
  upload.single('avatar'),
  updateUserAvatar,
);

export default usersRouter;
