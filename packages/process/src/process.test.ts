import { IS_NODE_ENV_PROD, getProcessId } from './process';

describe('process', () => {
  describe('getProcessId()', () => {
    it('should return a string', () => {
      expect(getProcessId()).toMatch(/^.+:\d+$/);
    });
  });

  describe('IS_NODE_ENV_PROD', () => {
    it('should be true', () => {
      expect(typeof IS_NODE_ENV_PROD).toBe('boolean');
    });
  });
});
