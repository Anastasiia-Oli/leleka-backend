//
import { registerUser , logoutUser} from '../services/auth.js';

export const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};
export const logout = async (req, res) => {
  await logoutUser(req.user._id);
  res.status(204).send(); // No Content
};
