const siteUrl = "https://code.codinasion.org";

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  exclude: ["/~offline", "/sitemap-category.xml", "/sitemap-code.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/sitemap-category.xml`,
      `${siteUrl}/sitemap-code.xml`,
    ],
  },
};

module.exports = config;
