import { describe, it, expect } from 'vitest';
import { fibonacci } from '../ implementacion/fibonacci.js';

describe('fibonacci(n)', () => {
  it('devuelve 0 para n = 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  it('devuelve 1 para n = 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  it.each([
    [2, 1],
    [5, 5],
    [10, 55],
  ])('devuelve f(%i) = %i para n >= 2', (n, esperado) => {
    expect(fibonacci(n)).toBe(esperado);
  });

  it.each([-1, 1.5, '3', NaN])('lanza RangeError para %s', (n) => {
    expect(() => fibonacci(n)).toThrow(RangeError);
    expect(() => fibonacci(n)).toThrow('solo números enteros ≥ 0');
  });
});
