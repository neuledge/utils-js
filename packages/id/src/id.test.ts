/* eslint-disable max-lines-per-function */

import { Id, IdType } from './id';

describe('id', () => {
  describe('new Id()', () => {
    it('should create a new Id instance', () => {
      const id = new Id('test');
      expect(id).toBeInstanceOf(Id);
    });
  });

  describe('id.prefix', () => {
    it('should match the prefix', () => {
      const id = new Id('test');
      expect(id.prefix).toBe('test');
    });
  });

  describe('id.type', () => {
    it('should match the `IdType<>`', () => {
      const id = new Id('test');
      expect<IdType<'test'>>(id.type).toContain(`${id.prefix}_`);
    });

    it('should match the `typeof`', () => {
      const id = new Id('test');
      const generated = id.generate();

      expect<typeof id.type>(generated).toContain(`${id.prefix}_`);
    });
  });

  describe('id.generate()', () => {
    it('should generate a new id', () => {
      const id = new Id('test');

      const generated = id.generate();
      expect(generated).toMatch(/^test_/);
    });
  });

  describe('id.is()', () => {
    it('should return true for a valid id', () => {
      const id = new Id('test');

      expect(id.is('test_2x4y6z8a0b1c2d3e4f5g6h7j8k')).toBe(true);
    });

    it('should return false for an invalid id', () => {
      const id = new Id('test');

      expect(id.is('foo_2x4y6z8a0b1c2d3e4f5g6h7j8k')).toBe(false);
      expect(id.is('test_123')).toBe(false);
    });
  });

  describe('id.isValid()', () => {
    it('should return true for a valid id', () => {
      const id = new Id('test');

      expect(id.isValid('test_2x4y6z8a0b1c2d3e4f5g6h7j8k')).toBe(true);
    });

    it('should return false for an invalid id', () => {
      const id = new Id('test');

      expect(id.isValid('foo_2x4y6z8a0b1c2d3e4f5g6h7j8k')).toBe(false);
      expect(id.isValid('test_123')).toBe(false);
    });
  });

  describe('id.getSuffix()', () => {
    it('should return the suffix of an id', () => {
      const id = new Id('test');

      expect(id.getSuffix('test_2x4y6z8a0b1c2d3e4f5g6h7j8k')).toBe(
        '2x4y6z8a0b1c2d3e4f5g6h7j8k',
      );
    });

    it('should throw an error for an invalid id', () => {
      const id = new Id('test');

      expect(() =>
        id.getSuffix('foo_2x4y6z8a0b1c2d3e4f5g6h7j8k' as never),
      ).toThrow('Invalid id type: foo_2x4y6z8a0b1c2d3e4f5g6h7j8k');
    });
  });

  describe('id.fromSuffix()', () => {
    it('should create an id from a suffix', () => {
      const id = new Id('test');

      expect(id.fromSuffix('2x4y6z8a0b1c2d3e4f5g6h7j8k')).toBe(
        'test_2x4y6z8a0b1c2d3e4f5g6h7j8k',
      );
    });
  });
});
