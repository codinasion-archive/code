import { getServerSideSitemapIndex } from "next-sitemap";

import { AllCodeCategoryData, SiteMetadata } from "@/data";
import { TitleCaseStringToKebabCaseString } from "@codinasion/code";

export async function GET(request: Request) {
  const paths: string[] = [];

  AllCodeCategoryData.forEach((category: string) => {
    paths.push(
      `${SiteMetadata.site_url}/category/${TitleCaseStringToKebabCaseString(
        category
      )}`
    );
  });

  return getServerSideSitemapIndex(paths);
}
