import { printLog } from './logger';

describe('logger', () => {
  describe('printLog()', () => {
    let infoSpy: jest.SpyInstance;

    beforeEach(() => {
      infoSpy = jest.spyOn(console, 'info').mockImplementation(() => {
        // do nothing
      });
    });

    afterEach(() => {
      infoSpy.mockRestore();
    });

    it('print log in one line', () => {
      printLog('test', 'info', { foo: 'bar' });

      expect(infoSpy).toHaveBeenCalledTimes(1);
      expect(infoSpy).toHaveBeenCalledWith('test', '{"foo":"bar"}');
    });

    it('should handle circular structure', () => {
      const circular = { foo: 'bar' } as Record<string, unknown>;
      circular['circular'] = circular;

      printLog('test', 'info', circular);

      expect(infoSpy).toHaveBeenCalledTimes(1);
      expect(infoSpy).toHaveBeenCalledWith(
        'test',
        "<ref *1> { foo: 'bar', circular: [Circular *1] }",
      );
    });
  });
});
