import { model, Schema } from 'mongoose';

const momStatesSchema = new Schema(
  {
    weekNumber: { type: Number, default: 1, required: true },
    feelings: {
      states: { type: [String], default: [] },
      sensationDescr: { type: String, required: true },
    },
    comfortTips: [
      {
        category: { type: String, required: true },
        tip: { type: String, required: true },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const MomStates = model('MomStates', momStatesSchema, 'momStates');
