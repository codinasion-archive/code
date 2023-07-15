export function DecimalToAscii(decimal: number): string {
  if (decimal < 0 || decimal > 255) {
    return "";
  }
  return String.fromCharCode(decimal);
}
