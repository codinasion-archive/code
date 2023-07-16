import MarkdownPreview from "@/components/MarkdownPreview";

import {
  KebabCaseStringToTitleCaseString,
  CombineStrings,
  PascalCaseStringToTitleCaseString,
  PascalCaseStringToKebabCaseString,
} from "@codinasion/code";

import { CodeData } from "@/data";
import { CodeType } from "@/types";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const data = CodeData.find(
    (code: CodeType) => KebabCaseStringToTitleCaseString(slug) === code.category
  );

  return (
    <>
      <div className="mx-auto max-w-xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">{`${KebabCaseStringToTitleCaseString(
            slug
          )}`}</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Explore all codes in {`"${KebabCaseStringToTitleCaseString(slug)}"`}{" "}
            category.
          </p>
        </div>

        <MarkdownPreview>
          {`${(data?.combine === true
            ? CombineStrings(data?.functions ?? [])
            : data?.functions ?? []
          )
            .map(
              (category: string, index: number) =>
                `${index + 1}. [**${PascalCaseStringToTitleCaseString(
                  category
                )}**](/${PascalCaseStringToKebabCaseString(category)})`
            )
            .join("\n\n")}`}
        </MarkdownPreview>
      </div>
    </>
  );
}
