const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
      },
    ],
  },

  redirects: async () => {
    return [
      {
        source: "/api/categories",
        destination: "/api/category",
        permanent: true,
      },
      {
        source: "/api/codes",
        destination: "/api/code",
        permanent: true,
      },
      {
        source: "/category",
        destination: "/",
        permanent: true,
      },
      {
        source: "/categories",
        destination: "/",
        permanent: true,
      },
      {
        source: "/code/:slug",
        destination: "/:slug",
        permanent: true,
      },
      {
        source: "/codes/:slug",
        destination: "/:slug",
        permanent: true,
      },
      {
        source: "/sitemaps.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/sitemap-categories.xml",
        destination: "/sitemap-category.xml",
        permanent: true,
      },
      {
        source: "/sitemap-codes.xml",
        destination: "/sitemap-code.xml",
        permanent: true,
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
