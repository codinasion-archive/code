export function HexadecimalToOctal(hex: string): string {
  if (!/^[0-9A-Fa-f]+$/.test(hex)) {
    return "";
  }
  let decimal = 0;
  for (let i = 0; i < hex.length; i++) {
    const digit = parseInt(hex[i], 16);
    decimal = decimal * 16 + digit;
  }
  let octal = "";
  while (decimal > 0) {
    octal = (decimal % 8).toString() + octal;
    decimal = Math.floor(decimal / 8);
  }
  return octal || "0";
}
