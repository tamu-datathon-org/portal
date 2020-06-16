import React from "react";
import * as UI from "./style";
import PropTypes from "prop-types";
import { NavProps } from "./interfaces";

/**
 * Nav component
 */
export const Nav: React.FC<NavProps> = () => {
  return (
    <UI.Nav>
      <h1>hello from navbar</h1>
    </UI.Nav>
  );
};

Nav.propTypes = {
  navItems: PropTypes.any.isRequired,
};
