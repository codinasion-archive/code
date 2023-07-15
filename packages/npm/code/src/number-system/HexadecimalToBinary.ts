export function HexadecimalToBinary(hex: string): string {
  if (!/^[0-9A-Fa-f]+$/.test(hex)) {
    return "";
  }
  let binary = "";
  for (let i = 0; i < hex.length; i++) {
    const decimal = parseInt(hex[i], 16);
    binary += decimal.toString(2).padStart(4, "0");
  }
  return binary;
}
