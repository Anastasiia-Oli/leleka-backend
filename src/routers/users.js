import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { authenticateToken } from '../middlewares/auth.js';
import { getCurrentUser, updateUserData, updateUserAvatar} from '../controllers/users.js';

const usersRouter = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb (null, 'uploads/'),
filename: (req, file, cb ) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage});

usersRouter.get('/me', authenticateToken, getCurrentUser);
usersRouter.put('/update', authenticateToken, updateUserData);
usersRouter.post('/avatar', authenticateToken, upload.single('avatar'), updateUserAvatar);


export default usersRouter;
