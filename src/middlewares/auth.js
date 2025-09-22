import jwt from 'jsonwebtoken';
import { getEnvVar } from '../utils/getEnvVar.js';

const SECRET_KEY = getEnvVar('SECRET_KEY');

// export function generateToken(payload) {
//   return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
// }

export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    console.log("JWT error:", err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
