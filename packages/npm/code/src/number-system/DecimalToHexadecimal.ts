export function DecimalToHexadecimal(decimal: number): string {
  if (decimal < 0 || !Number.isInteger(decimal)) {
    return "";
  }
  let hex = "";
  while (decimal > 0) {
    const remainder = decimal % 16;
    hex =
      (remainder < 10
        ? remainder.toString()
        : String.fromCharCode(55 + remainder)) + hex;
    decimal = Math.floor(decimal / 16);
  }
  return hex || "0";
}
