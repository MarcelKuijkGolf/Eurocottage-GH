/**
 * Formatteert een aantal nachten in het Nederlands.
 * @param nights aantal nachten, minimaal 0
 */
export function formatNights(nights: number): string {
  if (!Number.isInteger(nights) || nights < 0) {
    throw new RangeError('nights moet een geheel getal van 0 of hoger zijn');
  }
  return nights === 1 ? '1 nacht' : `${nights} nachten`;
}
