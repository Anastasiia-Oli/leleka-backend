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
    const updatedUser = await updateUser(req.user.id, req.body);
    if (!req.file)
      return res.status(400).json({ message: 'Користувача не знайдено'});
    res.json({ message: 'Дані оновлено', user: updatedUser});
   } catch (error) {
    res.status(500).json({ message: 'Помилка сервера' });
    console.error(error);
   }
}

export async function updateUserAvatar ( req, res ) {
  try{
    if (!req.file)
      return res.status(400).json({ message: 'Фай не завантажено'});
    const updatedUser = await updateAvatar(req.user.id, `/uploads/${RegExp.file.filename}`);
    res.json({ message: 'Аватар оновлено', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Помилка сервера' });
    console.error(error);
  }
}

