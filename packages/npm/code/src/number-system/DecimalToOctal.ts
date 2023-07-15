export function DecimalToOctal(decimal: number): string {
  if (decimal < 0 || !Number.isInteger(decimal)) {
    return "";
  }
  let octal = "";
  while (decimal > 0) {
    octal = (decimal % 8).toString() + octal;
    decimal = Math.floor(decimal / 8);
  }
  return octal || "0";
}
