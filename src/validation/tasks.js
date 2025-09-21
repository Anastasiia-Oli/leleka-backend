import Joi from 'joi';
import { validateDateString } from '../utils/validateDateString.js';

export const createTaskSchema = Joi.object({
  text: Joi.string().min(1).max(96).required(),
  date: Joi.string()
    .pattern(/^\d{4}-\d{2}-\d{2}$/)
    .custom(validateDateString)
    .required(),
  isDone: Joi.boolean().default(false),
});
export const updateStatusSchema = Joi.object({
  isDone: Joi.boolean().required(),
});
