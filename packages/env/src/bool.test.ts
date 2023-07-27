import { bool } from './bool';

describe('bool', () => {
  describe('bool()', () => {
    it('should return true for "true"', () => {
      expect(bool('true')).toBe(true);
    });

    it('should return true for "1"', () => {
      expect(bool('1')).toBe(true);
    });

    it('should return true for "yes"', () => {
      expect(bool('yes')).toBe(true);
    });

    it('should return true for "on"', () => {
      expect(bool('on')).toBe(true);
    });

    it('should return false for "false"', () => {
      expect(bool('false')).toBe(false);
    });

    it('should return false for "0"', () => {
      expect(bool('0')).toBe(false);
    });

    it('should return false for "no"', () => {
      expect(bool('no')).toBe(false);
    });

    it('should return false for "off"', () => {
      expect(bool('off')).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(bool(void 0)).toBe(false);
    });

    it('should return false for ""', () => {
      expect(bool('')).toBe(false);
    });

    it('should return false for " "', () => {
      expect(bool(' ')).toBe(false);
    });

    it('should return false for "test"', () => {
      expect(bool('test')).toBe(false);
    });
  });
});
