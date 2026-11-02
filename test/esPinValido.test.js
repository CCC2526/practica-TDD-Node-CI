import { describe, it, expect } from 'vitest';
import { esPinValido } from '../implementacion/esPinValido.js';

describe('esPinValido(pin)', () => {
  it.each([null, undefined, '', 1234])('devuelve false para %s', (pin) => {
    expect(esPinValido(pin)).toBe(false);
  });

  it.each(['1234', '123456', '1122'])('devuelve true para el PIN válido %s', (pin) => {
    expect(esPinValido(pin)).toBe(true);
  });

  it.each(['123', '12345', '1234567'])('devuelve false si la longitud no es 4 ni 6 (%s)', (pin) => {
    expect(esPinValido(pin)).toBe(false);
  });

  it.each(['12a4', '12 34', '12.45'])('devuelve false si hay caracteres no numéricos (%s)', (pin) => {
    expect(esPinValido(pin)).toBe(false);
  });

  it.each(['0000', '1111', '888888', '333333'])('devuelve false si todos los dígitos son iguales (%s)', (pin) => {
    expect(esPinValido(pin)).toBe(false);
  });
});