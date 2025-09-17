import { model, Schema } from 'mongoose';

const momStatesSchema = new Schema({
  weekNumber: {
    type: Number,
    default: 1,
    required: true,
  },
  feelings: {
    states: {
      type: [String],
      validate: {
        validator: (arr) => Array.isArray(arr) && arr.length > 0,
        message: 'momDailyTips must be a non-empty array',
      },
    },

    sensationDescr: {
      type: [String],
    },
  },
});

//  finish later
