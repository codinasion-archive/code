type NavbarItemType = {
  label: string;
  type: "link" | "menu";
};

type NavbarLinkItemType = NavbarItemType & {
  href: string;
};

type NavbarMenuCallToActionType = {
  label: string;
  href: string;
  icon: any;
};

type NavbarMenuItemType = NavbarMenuCallToActionType & {
  description: string;
};

type NavbarMenuType = NavbarItemType & {
  items: NavbarMenuItemType[];
  callsToAction: NavbarMenuCallToActionType[];
};

type NavbarLinkType = NavbarLinkItemType | NavbarMenuType;

export type {
  NavbarLinkType,
  NavbarItemType,
  NavbarLinkItemType,
  NavbarMenuType,
  NavbarMenuItemType,
  NavbarMenuCallToActionType,
};
