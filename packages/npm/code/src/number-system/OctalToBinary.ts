export function OctalToBinary(octal: string): string {
  if (!/^[0-7]+$/.test(octal)) {
    return "";
  }
  let binary = "";
  for (let i = 0; i < octal.length; i++) {
    const decimal = parseInt(octal[i], 8);
    binary += decimal.toString(2).padStart(3, "0");
  }
  return binary;
}
