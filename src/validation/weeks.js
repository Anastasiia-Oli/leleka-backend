import Joi from 'joi';

export const weekNumberParamSchema = Joi.object({
  weekNumber: Joi.number().integer().min(1).max(42).required().messages({
    'number.base': 'weekNumber must be a number',
    'number.integer': 'weekNumber must be an integer',
    'number.min': 'weekNumber must be at least 1',
    'number.max': 'weekNumber cannot be greater than 40',
    'any.required': 'weekNumber is required',
  }),
});
