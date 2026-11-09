import { describe, expect, it } from 'vitest';
import { formatNights } from './format';

describe('formatNights', () => {
  it('geeft enkelvoud bij 1 nacht', () => {
    expect(formatNights(1)).toBe('1 nacht');
  });

  it('geeft meervoud bij meer nachten', () => {
    expect(formatNights(0)).toBe('0 nachten');
    expect(formatNights(3)).toBe('3 nachten');
  });

  it('gooit een fout bij ongeldige invoer', () => {
    expect(() => formatNights(-1)).toThrow(RangeError);
    expect(() => formatNights(1.5)).toThrow(RangeError);
  });
});
