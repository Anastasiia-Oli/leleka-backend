import { getWeekData, getBabyData, getMomData } from '../services/weeks.js';

export const getWeek = async (req, res) => {
  const weekNumber = parseInt(req.params.weekNumber, 10);
  const dueDate = req.user?.dueDate;

  const data = await getWeekData(weekNumber, dueDate);

  if (!data) {
    return res.status(404).json({ message: 'Week not found' });
  }

  res.json(data);
};

export const getBabyWeek = async (req, res) => {
  const weekNumber = parseInt(req.params.weekNumber, 10);
  const baby = await getBabyData(weekNumber);

  if (!baby) return res.status(404).json({ message: 'Week not found' });

  res.json({ weekNumber, baby });
};

export const getMomWeek = async (req, res) => {
  const weekNumber = parseInt(req.params.weekNumber, 10);
  const mom = await getMomData(weekNumber);

  if (!mom) return res.status(404).json({ message: 'Week not found' });

  res.json({ weekNumber, mom });
};
