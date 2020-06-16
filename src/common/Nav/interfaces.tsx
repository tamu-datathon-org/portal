export interface NavItem {
  name: string;
  path: string;
  // optional since I'm not sure we'll need it yet
  scrollID?: string;
}

export interface NavProps {
  navItems: Array<NavItem>;
}

// temporary nav items only for testing
export const PhantomNavItems = [
  {
    name: "Home",
    path: "/#home",
  },
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "Sponsors",
    path: "/#sponsors",
  },
];
