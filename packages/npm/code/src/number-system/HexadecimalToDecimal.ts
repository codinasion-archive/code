export function HexadecimalToDecimal(hex: string): number {
  if (!/^[0-9A-Fa-f]+$/.test(hex)) {
    return NaN;
  }
  let decimal = 0;
  for (let i = 0; i < hex.length; i++) {
    const digit = parseInt(hex[i], 16);
    decimal = decimal * 16 + digit;
  }
  return decimal;
}
