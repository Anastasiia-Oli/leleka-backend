import { Schema, model } from 'mongoose';

const taskSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      maxLength: 96,
    },
    date: {
      type: String,
      required: true,
      default: () => new Date().toISOString().split('T')[0],
    },
    isDone: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);
export const TaskCollection = model('tasks', taskSchema);
