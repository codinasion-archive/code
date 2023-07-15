export function OctalToDecimal(octal: string): number {
  if (!/^[0-7]+$/.test(octal)) {
    return NaN;
  }
  let decimal = 0;
  for (let i = 0; i < octal.length; i++) {
    const digit = parseInt(octal[i], 8);
    decimal = decimal * 8 + digit;
  }
  return decimal;
}
