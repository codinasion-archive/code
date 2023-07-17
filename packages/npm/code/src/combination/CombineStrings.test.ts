import { CombineStrings } from "./CombineStrings";

describe("CombineStrings", () => {
  it("should combine an array of strings with a default joining keyword", () => {
    const strings = ["A", "B", "C"];
    const expected = ["AToB", "AToC", "BToA", "BToC", "CToA", "CToB"];
    const result = CombineStrings(strings);
    expect(result).toEqual(expected);
  });

  it("should return same string", () => {
    const strings = ["A"];
    const expected = ["A"];
    const result = CombineStrings(strings);
    expect(result).toEqual(expected);
  });

  it("should combine an array of strings with a specified joining keyword", () => {
    const strings = ["apple", "banana", "orange"];
    const joiningKeyword = "And";
    const expected = [
      "appleAndbanana",
      "appleAndorange",
      "bananaAndapple",
      "bananaAndorange",
      "orangeAndapple",
      "orangeAndbanana",
    ];
    const result = CombineStrings(strings, joiningKeyword);
    expect(result).toEqual(expected);
  });

  it("should remove duplicates before combining", () => {
    const strings = ["apple", "banana", "banana", "orange", "orange", "orange"];
    const expected = [
      "appleTobanana",
      "appleToorange",
      "bananaToapple",
      "bananaToorange",
      "orangeToapple",
      "orangeTobanana",
    ];
    const result = CombineStrings(strings);
    expect(result).toEqual(expected);
  });
});
