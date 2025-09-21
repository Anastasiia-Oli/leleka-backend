import dayjs from 'dayjs';

export const validateDateString = (value, helpers) => {
  const parsed = dayjs(value, 'YYYY-MM-DD', true);
  const curDate = dayjs().format('YYYY-MM-DD');
  if (!parsed.isValid()) return helpers.error('any.invalid');
  if (parsed.isBefore(dayjs(curDate), 'day')) return helpers.error('date.min');
  return value;
};
