import {
  NewspaperIcon,
  WrenchScrewdriverIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

import { FaGithub, FaTwitter } from "react-icons/fa";

import type { NavbarLinkType } from "@/types";

import SiteMetadata from "./SiteMetadata";

const NavbarLinks: NavbarLinkType[] = [
  {
    label: "Blog",
    type: "link",
    href: "/blog",
  },
  {
    label: "Projects",
    type: "menu",
    items: [
      {
        label: "Blog",
        description: "I write about web development and programming",
        href: "/blog",
        icon: NewspaperIcon,
      },
      {
        label: "Tools",
        description: "I build online tools to help me and others",
        href: "/tools",
        icon: WrenchScrewdriverIcon,
      },
      {
        label: "Good First Issues",
        description: "Good first issues finder for open source projects",
        href: "/good-first-issue",
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
