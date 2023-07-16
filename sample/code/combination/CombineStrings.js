import { CombineStrings } from "@codinasion/code";

const strings = ["A", "B", "C"];

const combination = CombineStrings(strings);
console.log(combination);

// Output:
// [ 'AToB', 'AToC', 'BToA', 'BToC', 'CToA', 'CToB' ]
