import { formatSlug } from './string';

describe('String', () => {
  describe('formatSlug()', () => {
    it('should format slug', () => {
      expect(formatSlug('Hello World')).toBe('hello-world');
    });

    it('should format slug with numbers', () => {
      expect(formatSlug('Hello 123 World')).toBe('hello-123-world');
    });

    it('should format slug with special characters', () => {
      expect(formatSlug('Hello World!')).toBe('hello-world');
    });

    it('should format slug with multiple spaces', () => {
      expect(formatSlug('Hello   World')).toBe('hello-world');
    });

    it('should format slug with leading and trailing spaces', () => {
      expect(formatSlug(' Hello World ')).toBe('hello-world');
    });
  });
});
