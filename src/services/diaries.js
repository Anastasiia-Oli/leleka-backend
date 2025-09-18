import Diary from '../db/models/diary.js';

// Створити новий запис
export const createDiaryService = async ({
  title,
  description,
  date,
  emotions,
  ownerId,
}) => {
  const newDiary = await Diary.create({
    title,
    description,
    date,
    emotions,
    owner: ownerId,
  });
  return newDiary;
};

// Отримати всі записи користувача
export const getDiariesService = async (ownerId) => {
  const diaries = await Diary.find({ owner: ownerId }).sort({ createdAt: -1 });
  return diaries;
};

// Оновити запис
export const updateDiaryService = async (id, ownerId, updateData) => {
  const diary = await Diary.findOneAndUpdate(
    { _id: id, owner: ownerId },
    updateData,
    { new: true },
  );
  return diary;
};

// Видалити запис
export const deleteDiaryService = async (id, ownerId) => {
  const diary = await Diary.findOneAndDelete({ _id: id, owner: ownerId });
  return diary;
};
