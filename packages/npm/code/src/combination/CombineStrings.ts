export function CombineStrings(
  strings: string[],
  joiningKeyword: string = "To"
): string[] {
  if (strings.length === 1) {
    return strings;
  }

  // remove duplicates
  const uniqueStrings = [...new Set(strings)];

  const combinations: string[] = [];
  for (let i = 0; i < uniqueStrings.length; i++) {
    for (let j = 0; j < uniqueStrings.length; j++) {
      if (i !== j) {
        const combination = `${uniqueStrings[i]}${joiningKeyword}${uniqueStrings[j]}`;
        combinations.push(combination);
      }
    }
  }

  return combinations;
}
