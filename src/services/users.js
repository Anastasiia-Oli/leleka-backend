import { UsersCollection } from '../db/models/users.js';

export async function getUserById(id) {
  return await UsersCollection.findById(id);
}

export async function updateUser(id, data) {
  return await UsersCollection.findByIdAndUpdate(id, data, { new: true });
}

export async function updateAvatar(id, avatarPath) {
  return await UsersCollection.findByIdAndUpdate(id, { photo: avatarPath }, { new: true });
}
