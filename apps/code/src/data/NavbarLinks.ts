import {
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

import { FaGithub, FaTwitter } from "react-icons/fa";

import type { NavbarLinkType } from "@/types";

import SiteMetadata from "./SiteMetadata";

const NavbarLinks: NavbarLinkType[] = [
  {
    label: "Projects",
    type: "menu",
    items: [
      {
        label: "Code",
        description: "A collection of useful TypeScript code snippets",
        href: "https://code.codinasion.org",
        icon: CodeBracketIcon,
      },
      {
        label: "Tools",
        description: "A collection of useful online tools",
        href: "https://tools.codinasion.org",
        icon: WrenchScrewdriverIcon,
      },
      {
        label: "Good First Issues",
        description: "Good first issues finder for open source projects",
        href: "https://goodfirstissue.codinasion.org",
        icon: CheckBadgeIcon,
      },
    ],
    callsToAction: [
      { label: "Github", href: SiteMetadata.github_url, icon: FaGithub },
      { label: "Twitter", href: SiteMetadata.twitter_url, icon: FaTwitter },
    ],
  },
];

export default NavbarLinks;
