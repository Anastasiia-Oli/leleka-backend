import { getUserById, updateUser, updateAvatar } from '../services/users.js';

export async function getCurrentUser (req,res ) {
  try {const user = await getUserById(req.user.id);
    if(!user)
      return res.status(404).json({ message: 'Користувача не знайдено'});
    res.json({ user });
} catch (error) {
  res.status(500).json({ message: 'Помилка сервера' });
  console.error(error);
}
}

export async function updateUserData(req, res) {
  try {
    console.log("Decoded JWT payload:", req.user);
    console.log("updateCurrentUserController -> req.body:", req.body);

    const updatedUser = await updateUser(req.user.id, req.body);

    if (!updatedUser) {
      return res.status(404).json({ message: 'Користувача не знайдено' });
    }

    res.json({ message: 'Дані оновлено', user: updatedUser });
  } catch (error) {
    console.error("updateCurrentUserController error:", error);
    res.status(500).json({ message: 'Помилка сервера' });
  }
}


export async function updateUserAvatar(req, res) {
  try {
    console.log("Decoded JWT payload:", req.user);
    console.log("updateCurrentUserController -> req.body:", req.body);
    if (!req.file) {
      return res.status(400).json({ message: 'Файл не завантажено' });
    }

    const updatedUser = await updateAvatar(req.user.id, req.file.path);

    // if (!updatedUser) {
    //   return res.status(404).json({ message: 'Користувача не знайдено' });
    // }

    res.json({ message: 'Аватар оновлено', user: updatedUser });
  } catch (error) {
    console.error("updateUserAvatar error:", error);
    res.status(500).json({ message: 'Помилка сервера' });
  }
}


