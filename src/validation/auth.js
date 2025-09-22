//
import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().max(32).required().messages({
    'string.empty': "Ім'я обов'язкове",
    'string.max': "Ім'я має містити максимум 32 символи",
  }),
  email: Joi.string().email().max(64).required().messages({
    'string.empty': "Email обов'язковий",
    'string.email': 'Неправильний формат email',
    'string.max': 'Email має містити максимум 64 символи',
  }),
  password: Joi.string().min(8).max(128).required().messages({
    'string.empty': "Пароль обов'язковий",
    'string.min': 'Пароль має містити мінімум 8 символів',
    'string.max': 'Пароль має містити максимум 128 символів',
  }),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
