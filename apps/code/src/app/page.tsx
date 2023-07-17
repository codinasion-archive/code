import MarkdownPreview from "@/components/MarkdownPreview";

import { StringToKebabCase } from "@codinasion/code";

import { CodeData } from "@/data";
import { CodeType } from "@/types";

export default function HomePage() {
  return (
    <>
      <div className="mx-auto max-w-xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Categories</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Explore all categories of @codinasion/code.
          </p>
        </div>

        <MarkdownPreview>
          {`${CodeData.map(
            (code: CodeType, index: number) =>
              `${index + 1}. [**${
                code.category
              }**](/category/${StringToKebabCase(code.category)})`
          ).join("\n\n")}`}
        </MarkdownPreview>
      </div>
    </>
  );
}
