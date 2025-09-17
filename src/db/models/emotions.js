import { model, Schema } from 'mongoose';

const emotionsSchema = new Schema({
  title: { type: String, required: true },
});

export const EmotionsCollection = model('emotions', emotionsSchema);
