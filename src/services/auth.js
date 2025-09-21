import { UsersCollection } from '../db/models/users.js';

export const logoutUser = async (userId) => {
  return await UsersCollection.findByIdAndUpdate(userId, { token: null });
};
