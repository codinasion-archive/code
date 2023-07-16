import MarkdownPreview from "@/components/MarkdownPreview";

import {
  CombineStrings,
  KebabCaseStringToTitleCaseString,
  KebabCaseStringToPascalCaseString,
  TitleCaseStringToKebabCaseString,
} from "@codinasion/code";

import { CodeData, GetCodeText, GetSampleCodeText } from "@/data";

export default async function CodePage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const data = CodeData.find((code) =>
    code.combine === true
      ? CombineStrings(code.functions).includes(
          KebabCaseStringToPascalCaseString(slug)
        )
      : code.functions.includes(KebabCaseStringToPascalCaseString(slug))
  );

  const CodeText =
    data &&
    (await GetCodeText({
      slug: `${TitleCaseStringToKebabCaseString(
        data.category
      )}/${KebabCaseStringToPascalCaseString(slug)}`,
    }));

  const SampleCodeText =
    data &&
    (await GetSampleCodeText({
      slug: `${TitleCaseStringToKebabCaseString(
        data.category
      )}/${KebabCaseStringToPascalCaseString(slug)}`,
    }));

  return (
    <>
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">{`${KebabCaseStringToTitleCaseString(
            slug
          )}`}</h2>
        </div>

        {data && CodeText && SampleCodeText && (
          <MarkdownPreview>
            {`## TyepeScript Function
  
\`\`\`typescript
${CodeText}
\`\`\`

## Sample Code

This code requires [\`@codinasion/code\`](https://www.npmjs.com/package/@codinasion/code) to be installed.

\`\`\`javascript
${SampleCodeText}
\`\`\`
`}
          </MarkdownPreview>
        )}
      </div>
    </>
  );
}
