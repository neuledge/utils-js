import { elapsedTimeStr } from './time';

describe('Time', () => {
  describe('elapsedTimeStr()', () => {
    it('should format elapsed 0ms', () => {
      expect(elapsedTimeStr(0)).toBe('00:00:00.000');
    });

    it('should format elapsed 250ms', () => {
      expect(elapsedTimeStr(250)).toBe('00:00:00.250');
    });

    it('should format elapsed 1s', () => {
      expect(elapsedTimeStr(1e3)).toBe('00:00:01.000');
    });

    it('should format elapsed 60ms', () => {
      expect(elapsedTimeStr(60e3)).toBe('00:01:00.000');
    });

    it('should format elapsed 3600s', () => {
      expect(elapsedTimeStr(3600e3)).toBe('01:00:00.000');
    });

    it('should format elapsed 86,400s', () => {
      expect(elapsedTimeStr(86_400e3)).toBe('24:00:00.000');
    });

    it('should format elapsed 90,061s', () => {
      expect(elapsedTimeStr(90_061e3)).toBe('25:01:01.000');
    });

    it('should format elapsed 90,061.5s', () => {
      expect(elapsedTimeStr(90_061.5e3)).toBe('25:01:01.500');
    });

    it('should format elapsed 90,061.9s', () => {
      expect(elapsedTimeStr(90_061.9e3)).toBe('25:01:01.900');
    });
  });
});
