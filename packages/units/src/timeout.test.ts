import { awaitTimeout, rejectTimeout } from './timeout';

describe('Timeout', () => {
  describe('awaitTimeout()', () => {
    it('should resolve after timeout', async () => {
      await expect(awaitTimeout(1)).resolves.toBeUndefined();
    });
  });

  describe('rejectTimeout()', () => {
    it('should reject after timeout', async () => {
      await expect(rejectTimeout(1)).rejects.toThrow('Timeout');
    });

    it('should reject with custom error', async () => {
      await expect(rejectTimeout(1, new Error('Custom'))).rejects.toThrow(
        'Custom',
      );
    });
  });
});
