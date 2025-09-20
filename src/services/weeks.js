import fs from 'fs';
import path from 'path';

const babyWeeks = JSON.parse(
  fs.readFileSync(
    path.resolve('./src/data/lehlehka.baby_states.json'),
    'utf-8',
  ),
);
const momWeeks = JSON.parse(
  fs.readFileSync(path.resolve('./src/data/lehlehka.mom_states.json'), 'utf-8'),
);

export const getWeekData = (weekNumber, dueDate) => {
  const baby = babyWeeks.find((w) => w.weekNumber === weekNumber);
  const mom = momWeeks.find((w) => w.weekNumber === weekNumber);

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

export const getBabyData = (weekNumber) =>
  babyWeeks.find((w) => w.weekNumber === weekNumber) || null;
export const getMomData = (weekNumber) =>
  momWeeks.find((w) => w.weekNumber === weekNumber) || null;
