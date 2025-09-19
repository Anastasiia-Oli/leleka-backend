import { getWeekData, getBabyData, getMomData } from '../services/weeks.js';

export const getWeek = (req, res) => {
  const weekNumber = parseInt(req.params.weekNumber, 10);

  const dueDate = req.user?.dueDate;

  const data = getWeekData(weekNumber, dueDate);

  if (!data) {
    return res.status(404).json({ message: 'Week not found' });
  }

  res.json(data);
};

export const getBabyWeek = (req, res) => {
  const weekNumber = parseInt(req.params.weekNumber, 10);
  const baby = getBabyData(weekNumber);

  if (!baby) return res.status(404).json({ message: 'Week not found' });

  res.json({ weekNumber, baby });
};

// только данные про маму
export const getMomWeek = (req, res) => {
  const weekNumber = parseInt(req.params.weekNumber, 10);
  const mom = getMomData(weekNumber);

  if (!mom) return res.status(404).json({ message: 'Week not found' });

  res.json({ weekNumber, mom });
};
