export const formatDigits = (num: number, pad = 2): string =>
  String(Math.floor(num)).padStart(pad, '0');
