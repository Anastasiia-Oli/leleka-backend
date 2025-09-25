import { EmotionsCollection } from '../db/models/emotions.js';

// ✅ Отримати всі емоції
export const getAllEmotions = async (req, res, next) => {
  try {
    const emotions = await EmotionsCollection.find().sort({ name: 1 }); // відсортуємо за назвою
    res.json(emotions);
  } catch (error) {
    next(error);
  }
};
