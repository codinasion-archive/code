import { AsciiToDecimal } from "./AsciiToDecimal";

describe("AsciiToDecimal", () => {
  it("should convert ASCII to decimal", () => {
    expect(AsciiToDecimal("Hello, world!")).toEqual([
      72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33,
    ]);
    expect(AsciiToDecimal("")).toEqual([]);
  });
});
