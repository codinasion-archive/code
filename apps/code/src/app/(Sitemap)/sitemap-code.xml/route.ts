import { getServerSideSitemapIndex } from "next-sitemap";

import { AllCodeFunctionData, SiteMetadata } from "@/data";
import { PascalCaseStringToKebabCaseString } from "@codinasion/code";

export async function GET(request: Request) {
  const paths: string[] = [];

  AllCodeFunctionData.forEach((fnc: string) => {
    paths.push(
      `${SiteMetadata.site_url}/${PascalCaseStringToKebabCaseString(fnc)}`
    );
  });

  return getServerSideSitemapIndex(paths);
}
