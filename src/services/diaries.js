import Diary from '../db/models/diary.js';

// Створити новий запис
export const createDiaryService = async ({
  title,
  description,
  date,
  emotions,
  userId,
}) => {
  const newDiary = await Diary.create({
    title,
    description,
    date,
    emotions,
    userId,
  });
  return newDiary;
};

// Отримати всі записи користувача
export const getDiariesService = async (userId) => {
  const diaries = await Diary.find({ userId }).sort({ createdAt: -1 });
  return diaries;
};

// Оновити запис
export const updateDiaryService = async (id, userId, updateData) => {
  const diary = await Diary.findOneAndUpdate({ _id: id, userId }, updateData, {
    new: true,
  });
  return diary;
};

// Видалити запис
export const deleteDiaryService = async (id, userId) => {
  const diary = await Diary.findOneAndDelete({ _id: id, userId });
  return diary;
};
