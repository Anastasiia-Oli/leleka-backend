import { UsersCollection } from '../db/models/users.js';
import { uploadToCloudinary } from '../utils/cloudinary.js';

export async function getUserById(id) {
  return await UsersCollection.findById(id)
  .select('-password')
  .lean();
}

export async function updateUser(id, data) {
  return await UsersCollection.findByIdAndUpdate(id, data, { new: true })
  .select('-password')
  .lean();
}

export async function updateAvatar(id, fileBuffer) {
  const newAvatarURL = await uploadToCloudinary(fileBuffer, id);
  return await UsersCollection.findByIdAndUpdate(id, { avatar: newAvatarURL }, { new: true, select: '-password' });
  // return await UsersCollection.findByIdAndUpdate(id, { photo: avatarPath }, { new: true });
}
