import jwt from 'jsonwebtoken';
import createHttpError from 'http-errors';
import { UsersCollection } from '../db/models/users.js';

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || '';
    const [bearer, token] = authHeader.split(' ');

    if (bearer !== 'Bearer' || !token) {
      throw createHttpError(401, 'Not authorized');
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UsersCollection.findById(payload.id);

    if (!user || user.token !== token) {
      throw createHttpError(401, 'Not authorized');
    }

    req.user = user;
    next();
  } catch (error) {
    next(createHttpError(401, 'Not authorized'));
  }
};
