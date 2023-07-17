import type { Metadata } from "next";

import MarkdownPreview from "@/components/MarkdownPreview";

import {
  KebabCaseStringToTitleCaseString,
  CombineStrings,
  PascalCaseStringToTitleCaseString,
  PascalCaseStringToKebabCaseString,
  TitleCaseStringToKebabCaseString,
} from "@codinasion/code";

import { CodeData, AllCodeCategoryData, SiteMetadata } from "@/data";
import { CodeType } from "@/types";

////////////////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/api-reference/metadata#generatemetadata-function
// Generate metadata for this page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  const title = `${KebabCaseStringToTitleCaseString(slug)} | ${
    SiteMetadata.title
  }`;
  const description = `Explore all codes in ${KebabCaseStringToTitleCaseString(
    slug
  )} category.`;

  return {
    title: title,
    description: description,

    keywords: [
      KebabCaseStringToTitleCaseString(slug),
      "@codinasion/code",
      "codinasion",
      "code",
    ],

    openGraph: {
      title: title,
      description: description,
      url: `${SiteMetadata.site_url}/${slug}}`,
      siteName: SiteMetadata.title,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      siteId: SiteMetadata.twitter_userid,
      creator: `@${SiteMetadata.twitter_username}`,
      creatorId: SiteMetadata.twitter_userid,
    },
  };
}
// End of metadata generation
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/data-fetching/generating-static-params
// Make this page statically generated, with dynamic params
export const dynamicParams = true;
export async function generateStaticParams() {
  const categories = AllCodeCategoryData.map((category: string) =>
    TitleCaseStringToKebabCaseString(category)
  );

  return categories.slice(0, 1).map((slug: string) => ({
    slug,
  }));
}
// End of static generation
//////////////////////////////////////////////////////////////////////

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const data = CodeData.find(
    (code: CodeType) => KebabCaseStringToTitleCaseString(slug) === code.category
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

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
