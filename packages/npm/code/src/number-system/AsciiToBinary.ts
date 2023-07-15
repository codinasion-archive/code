export function AsciiToBinary(ascii: string): string {
  let binary = "";
  for (let i = 0; i < ascii.length; i++) {
    const charCode = ascii.charCodeAt(i);
    if (charCode < 0 || charCode > 255) {
      return "";
    }
    binary += charCode.toString(2).padStart(8, "0");
  }
  return binary;
}
