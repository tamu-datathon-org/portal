import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

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

NavPills.propTypes = {
  children: PropTypes.any,
  activeKey: PropTypes.string,
};

// NavItem Component
export const NavItem: React.FC<NavItemProps> = (props) => {
  const { href: hrefEntry, as, children } = props;
  return (
    <UI._NavItem>
      <Link href={hrefEntry} as={as} passHref legacyBehavior>
        <UI.NavAnchor eventKey={as}>{children}</UI.NavAnchor>
      </Link>
    </UI._NavItem>
  );
};

// children not required b/c link can be made w/o text
// i mean it shouldn't but welp
NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any,
  as: PropTypes.string,
};
