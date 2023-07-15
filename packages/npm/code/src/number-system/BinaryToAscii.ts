export function BinaryToAscii(binary: string): string {
  let ascii = "";
  for (let i = 0; i < binary.length; i += 8) {
    const byte = binary.slice(i, i + 8);
    const charCode = parseInt(byte, 2);
    ascii += String.fromCharCode(charCode);
  }
  return ascii;
}
