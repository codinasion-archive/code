import { CombineStrings } from "@codinasion/code";

import { CodeType } from "@/types";

const CodeData: CodeType[] = [
  {
    category: "Combination",
    combine: false,
    functions: ["CombineStrings"],
  },
  {
    category: "Number System",
    combine: true,
    functions: ["Ascii", "Binary", "Decimal", "Hexadecimal", "Octal"],
  },
  {
    category: "String Manipulation",
    combine: true,
    functions: [
      "CamelCaseString",
      "ConstantCaseString",
      "DotCaseString",
      "HeaderCaseString",
      "KebabCaseString",
      "LowerCaseString",
      "PascalCaseString",
      "PathCaseString",
      "SentenceCaseString",
      "SnakeCaseString",
      "TitleCaseString",
      "UpperCaseString",
    ],
  },
];

const AllCodeCategoryData = CodeData.map((code) => code.category);
const AllCodeFunctionData = CodeData.map((code) =>
  (code.combine === true ? CombineStrings(code.functions) : code.functions).map(
    (func) => func
  )
).flat();

export { CodeData, AllCodeCategoryData, AllCodeFunctionData };

export async function GetCodeText({ slug }: { slug: string }) {
  const res = await fetch(`${process.env.CODINASION_CODE_URL}/${slug}.ts`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.CODINASION_REPO_TOKEN}`,
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch code text");
  }

  const data = await res.text();

  return data;
}

export async function GetSampleCodeText({ slug }: { slug: string }) {
  const res = await fetch(
    `${process.env.CODINASION_SAMPLE_CODE_URL}/${slug}.js`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.CODINASION_REPO_TOKEN}`,
      },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch code text");
  }

  const data = await res.text();

  return data;
}
