import { Router } from 'express';
import { authenticateToken } from '../middlewares/auth.js';
import { getCurrentUser, updateUserData, updateUserAvatar} from '../controllers/users.js';
import { upload } from '../middlewares/multer.js';

const usersRouter = Router();

usersRouter.get('/me', authenticateToken, getCurrentUser);
usersRouter.patch('/update', authenticateToken, updateUserData);
usersRouter.post('/avatar', authenticateToken, upload.single('avatar'), updateUserAvatar);


export default usersRouter;
