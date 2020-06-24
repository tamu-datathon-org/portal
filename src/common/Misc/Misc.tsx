import React from "react";
import Link from "next/link";
import { Nav } from "react-bootstrap";

import * as UI from "./style";

/**
 * NavPills Component
 */
export const NavPills: React.FC = () => {
  return (
    <UI.Nav variant="pills" defaultActiveKey="/events">
      <UI.NavItem>
        <Link href="/events" passHref>
          <UI.NavAnchor>Everything</UI.NavAnchor>
        </Link>
      </UI.NavItem>
      <UI.NavItem>
        <Link href="/day-1" passHref>
          <UI.NavAnchor>Day 1</UI.NavAnchor>
        </Link>
      </UI.NavItem>
      <UI.NavItem>
        <Link href="/day-2" passHref>
          <UI.NavAnchor>Day 2</UI.NavAnchor>
        </Link>
      </UI.NavItem>
      <UI.NavItem>
        <Link href="/sponsor-activities" passHref>
          <UI.NavAnchor>Sponsor Activities</UI.NavAnchor>
        </Link>
      </UI.NavItem>
    </UI.Nav>
  );
};
