import createHttpError from 'http-errors';
import { UsersCollection } from '../db/models/users.js';
import { SessionsCollection } from '../db/models/session.js';

export const authenticate = async (req, res, next) => {
  let token = null;
  // check authorization header
  const authHeader = req.get('Authorization');

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  }

  if (!token && req.cookies.accessToken) {
    token = req.cookies.accessToken;
  }

  if (!token) {
    return next(createHttpError(401, 'Access token not provided'));
  }

  // if (!authHeader) {
  //   next(createHttpError(401, 'Please provide Authorization header'));
  //   return;
  // }

  // // check header type and token presence
  // const bearer = authHeader.split(' ')[0];
  // const token = authHeader.split(' ')[1];

  // if (bearer !== 'Bearer' || !token) {
  //   next(createHttpError(401, 'Auth header should be of type Bearer'));
  //   return;
  // }

  // check session presence
  const session = await SessionsCollection.findOne({
    accessToken: decodeURIComponent(token),
  });

  if (!session) {
    next(createHttpError(401, 'Session not found'));
    return;
  }

  // check access token expiration
  const isAccessTokenExpired =
    new Date() > new Date(session.accessTokenValidUntil);

  if (isAccessTokenExpired) {
    next(createHttpError(401, 'Access token expired'));
    return;
  }

  // user lookup
  const user = await UsersCollection.findById(session.userId);

  if (!user) {
    next(createHttpError(401, 'User not found'));
    return;
  }

  // add user to request
  req.user = user;

  next();
};
