//
// validations/usersValidation.js
import Joi from 'joi';


export const registerSchema = Joi.object({
 name: Joi.string().min(2).max(50).required().messages({
 'string.base': 'Ім\'я повинно бути рядком.',
 'string.min': 'Ім\'я повинно містити принаймні {#limit} символи.',
 'string.max': 'Ім\'я не може перевищувати {#limit} символів.',
 'any.required': 'Ім\'я є обов\'язковим.',
 }),
 email: Joi.string().email().required().messages({
 'string.email': 'Введіть коректну адресу електронної пошти.',
 'any.required': 'Електронна пошта є обов\'язковою.',
 }),
 password: Joi.string().min(6).required().messages({
 'string.min': 'Пароль повинен бути не менше {#limit} символів.',
 'any.required': 'Пароль є обов\'язковим.',
 }),
});


export const updateSchema = Joi.object({
 name: Joi.string().min(2).max(50).optional(),
 email: Joi.string().email().optional(),
 password: Joi.string().min(6).optional(),
 childSex: Joi.string().valid('Дівчинка', 'Хлопчик', 'Ще не знаю').optional(),
 dueDate: Joi.string().optional(),
});
