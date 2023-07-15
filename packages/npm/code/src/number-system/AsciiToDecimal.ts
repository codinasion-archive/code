export function AsciiToDecimal(ascii: string): number[] {
  const decimalArray: number[] = [];
  for (let i = 0; i < ascii.length; i++) {
    const charCode = ascii.charCodeAt(i);
    decimalArray.push(charCode);
  }
  return decimalArray;
}
