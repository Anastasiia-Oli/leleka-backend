import { Schema, model } from 'mongoose';

const diarySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 64,
    },
    description: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1000,
    },
    date: {
      type: String, // формат "YYYY-MM-DD"
      default: () => new Date().toISOString().split('T')[0],
    },
    emotions: {
      type: [Schema.Types.ObjectId],
      ref: 'emotions',
      required: true,
      validate: {
        validator: (arr) => arr.length >= 1 && arr.length <= 12,
        message: 'Має бути від 1 до 12 емоцій',
      },
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
  },
  { timestamps: true },
);

export default model('Diary', diarySchema);
