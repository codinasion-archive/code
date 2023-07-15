import type { Metadata } from "next";

import "@/styles/globals.css";

import { SiteMetadata } from "@/data";

import Favicon from "@/public/favicon.ico";
import AppleTouchIcon from "@/public/apple-touch-icon.png";
import ShortcutIcon from "@/public/favicon-16x16.png";
import Layout from "@/layouts";

export const metadata: Metadata = {
  metadataBase: new URL(SiteMetadata.site_url),

  title: SiteMetadata.title,
  description: SiteMetadata.description,

  manifest: "/manifest.json",
  themeColor: "#FFFFFF",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SiteMetadata.title,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: Favicon.src,
    shortcut: ShortcutIcon.src,
    apple: AppleTouchIcon.src,
  },

  keywords: ["@codinasion/code", "codinasion", "code", "open source"],

  openGraph: {
    title: SiteMetadata.title,
    description: SiteMetadata.description,
    url: SiteMetadata.site_url,
    siteName: SiteMetadata.title,
    images: [],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SiteMetadata.title,
    description: SiteMetadata.description,
    siteId: SiteMetadata.twitter_userid,
    creator: `@${SiteMetadata.twitter_username}`,
    creatorId: SiteMetadata.twitter_userid,
    images: [],
  },

  archives: ["https://github.com/codinasion"],
  category: "technology",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-200">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
