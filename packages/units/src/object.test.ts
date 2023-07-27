import { isNonNullable } from './object';

describe('Object', () => {
  describe('isNonNullable()', () => {
    it('should return true for non-null and non-undefined values', () => {
      expect(isNonNullable(0)).toBe(true);
      expect(isNonNullable('')).toBe(true);
      expect(isNonNullable(false)).toBe(true);
      expect(isNonNullable(Symbol())).toBe(true);
      expect(isNonNullable({})).toBe(true);
    });

    it('should return false for null and undefined values', () => {
      expect(isNonNullable(null)).toBe(false);
      expect(isNonNullable(void 0)).toBe(false);
    });
  });
});
