import { formatDigits } from './numbers';

describe('Numbers', () => {
  describe('formatDigits()', () => {
    it('should format digits', () => {
      expect(formatDigits(1)).toBe('01');
    });

    it('should keep digits as is', () => {
      expect(formatDigits(10)).toBe('10');
    });

    it('should format digits with padding', () => {
      expect(formatDigits(1, 3)).toBe('001');
    });
  });
});
