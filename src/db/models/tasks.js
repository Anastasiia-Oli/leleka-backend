import { Schema, model } from 'mongoose';

const taskSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      maxLength: 96,
    },
    date: {
      type: Date,
      required: true,
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
  { timestamps: true },
);
export const TaskCollection = model('task', taskSchema);
