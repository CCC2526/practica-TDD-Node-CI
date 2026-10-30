const LONGITUDES_VALIDAS = [4, 6];
const SOLO_DIGITOS = /^[0-9]+$/;

export function esPinValido(pin) {
  if (typeof pin !== 'string') return false;
  if (!LONGITUDES_VALIDAS.includes(pin.length)) return false;
  if (!SOLO_DIGITOS.test(pin)) return false;
  return new Set(pin).size > 1;
}

