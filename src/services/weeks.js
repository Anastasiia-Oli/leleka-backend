import { BabyState } from '../db/models/babyStates.js';
import { MomStates } from '../db/models/momStates.js';

export const getWeekData = async (weekNumber, dueDate) => {
  const baby = await BabyState.findOne({ weekNumber }).lean();
  const mom = await MomStates.findOne({ weekNumber }).lean();

  if (!baby || !mom) return null;

  let daysLeft;
  if (dueDate) {
    const due = new Date(dueDate);
    const today = new Date();
    daysLeft = Math.max(0, Math.ceil((due - today) / (1000 * 60 * 60 * 24)));
  } else {
    const totalWeeks = 40;
    daysLeft = (totalWeeks - weekNumber) * 7;
  }

  return {
    weekNumber,
    baby,
    mom,
    daysLeft,
  };
};

export const getBabyData = async (weekNumber) =>
  (await BabyState.findOne({ weekNumber }).lean()) || null;

export const getMomData = async (weekNumber) =>
  (await MomStates.findOne({ weekNumber }).lean()) || null;
