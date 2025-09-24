import { model, Schema } from 'mongoose';

const babyStatesSchema = new Schema(
  {
    analogy: { type: String, default: null },
    weekNumber: { type: Number, default: 1, required: true },
    babySize: { type: Number, default: 0 },
    babyWeight: { type: Number, default: 0 },
    image: { type: String, required: true },
    babyActivity: { type: String, required: true },
    babyDevelopment: { type: String, required: true },
    interestingFact: { type: String, required: true },
    momDailyTips: {
      type: [String],
      validate: {
        validator: (arr) => Array.isArray(arr) && arr.length > 0,
        message: 'momDailyTips must be a non-empty array',
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const BabyState = model('BabyState', babyStatesSchema, 'babyStates');
