import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';
import {
  getCurrentUser,
  updateUserData,
  updateUserAvatar,
} from '../controllers/users.js';
import { upload } from '../middlewares/multer.js';
import { validateBody } from '../middlewares/validateBody.js';
import { updateSchema } from '../validation/users.js';

const usersRouter = Router();

usersRouter.use(authenticate);

usersRouter.get('/current', getCurrentUser);

usersRouter.patch('/', validateBody(updateSchema), updateUserData);

usersRouter.patch('/avatar', upload.single('avatar'), updateUserAvatar);

export default usersRouter;
