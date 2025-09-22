import {
  createDiaryService,
  getDiariesService,
  updateDiaryService,
  deleteDiaryService,
} from '../services/diaries.js';

// Створити запис
export const createDiary = async (req, res, next) => {
  try {
    const newDiary = await createDiaryService({
      ...req.body,
      userId: req.user._id,
    });
    res.status(201).json(newDiary);
  } catch (error) {
    next(error);
  }
};

// Отримати всі записи поточного користувача
export const getDiaries = async (req, res, next) => {
  try {
    const diaries = await getDiariesService(req.user._id);
    res.json(diaries);
  } catch (error) {
    next(error);
  }
};

// Редагувати запис
export const updateDiary = async (req, res, next) => {
  try {
    const diary = await updateDiaryService(
      req.params.id,
      req.user._id,
      req.body,
    );
    if (!diary) return res.status(404).json({ message: 'Запис не знайдено' });
    res.json(diary);
  } catch (error) {
    next(error);
  }
};

// Видалити запис
export const deleteDiary = async (req, res, next) => {
  try {
    const diary = await deleteDiaryService(req.params.id, req.user._id);
    if (!diary) {
      return res.status(404).json({ message: 'Запис не знайдено' });
    }
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};
