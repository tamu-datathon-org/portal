import React from "react";
import Link from "next/link";

import * as UI from "./style";
import { NavItemProps, NavPillsProps } from "./interfaces";

/**
 * NavPills Component
 */
export const NavPills: React.FC<NavPillsProps> = ({ children, activeKey }) => {
  return (
    <UI.Nav variant="pills" activeKey={activeKey}>
      {children}
    </UI.Nav>
  );
};

// NavItem Component
export const NavItem: React.FC<NavItemProps> = (props) => {
  const { href: hrefEntry, as, children } = props;
  return (
    <UI._NavItem>
      <Link href={hrefEntry} as={as} passHref>
        <UI.NavAnchor eventKey={as}>{children}</UI.NavAnchor>
      </Link>
    </UI._NavItem>
  );
};
