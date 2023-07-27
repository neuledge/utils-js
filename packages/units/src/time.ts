import { formatDigits } from '@/numbers';

export const SECOND_MS = 1e3;
export const MINUTE_MS = 60e3;
export const HOUR_MS = 3600e3;
export const DAY_MS = 24 * HOUR_MS;
export const WEEK_MS = 7 * DAY_MS;
export const YEAR_MS = 365 * DAY_MS;

export const elapsedTimeStr = (ms: number): string => {
  const milliseconds = formatDigits(ms % SECOND_MS, 3);
  const seconds = formatDigits((ms % MINUTE_MS) / SECOND_MS);
  const minutes = formatDigits((ms % HOUR_MS) / MINUTE_MS);
  const hours = formatDigits(ms / HOUR_MS);

  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
};
