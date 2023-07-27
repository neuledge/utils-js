import { roundCurrency } from './currency';

describe('Currency', () => {
  describe('roundCurrency()', () => {
    it('should round to two decimal places', () => {
      expect(roundCurrency(1.006)).toBe(1.01);
    });

    it('should round down', () => {
      expect(roundCurrency(1.005)).toBe(1);
    });
  });
});
