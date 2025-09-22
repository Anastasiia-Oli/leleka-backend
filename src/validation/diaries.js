import Joi from 'joi';

export const diarySchema = Joi.object({
  title: Joi.string().min(1).max(64).required(),
  description: Joi.string().min(1).max(1000).required(),
  date: Joi.string()
    .pattern(/^\d{4}-\d{2}-\d{2}$/)
    .default(() => new Date().toISOString().split('T')[0]),
  emotions: Joi.array().items(Joi.string()).min(1).max(12).required(),
});
