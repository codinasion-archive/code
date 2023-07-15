const siteUrl = "https://code.codinasion.org";

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  exclude: ["/~offline"],
  robotsTxtOptions: {
    additionalSitemaps: [],
  },
};

module.exports = config;
