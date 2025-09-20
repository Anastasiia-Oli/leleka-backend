import { UsersCollection } from '../db/models/users.js';
import { generateToken } from '../middlewares/auth.js';

// Простий логін (без шифрування пароля поки що)
export async function loginUser(req, res) {
  const { email, password } = req.body;

  const user = await UsersCollection.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Невірні дані для входу' });
  }

  // генеруємо токен
  const token = generateToken({ id: user._id, email: user.email });

  res.json({ token });
}
