import type { Metadata } from "next";

import MarkdownPreview from "@/components/MarkdownPreview";

import {
  CombineStrings,
  KebabCaseStringToTitleCaseString,
  KebabCaseStringToPascalCaseString,
  TitleCaseStringToKebabCaseString,
  PascalCaseStringToKebabCaseString,
} from "@codinasion/code";

import {
  CodeData,
  AllCodeFunctionData,
  GetCodeText,
  GetSampleCodeText,
  SiteMetadata,
} from "@/data";

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
  const description = `A TypeScript function for ${KebabCaseStringToTitleCaseString(
    slug
  )}. This function is part of ${SiteMetadata.title} project.`;

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
  const codes = AllCodeFunctionData.filter(
    (fnc: string) => fnc === "AsciiToBinary"
  ).map((category: string) => PascalCaseStringToKebabCaseString(category));

  return codes.slice(0, 1).map((slug: string) => ({
    slug,
  }));
}
// End of static generation
//////////////////////////////////////////////////////////////////////

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

  if (!data) {
    return {
      notFound: true,
    };
  }

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

  if (!CodeText || !SampleCodeText) {
    return {
      error: true,
    };
  }

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
