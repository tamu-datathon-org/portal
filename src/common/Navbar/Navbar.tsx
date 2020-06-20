import React from "react";
import * as UI from "./style";
import PropTypes from "prop-types";
import { NavProps } from "./interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar as ReactNavbar,
  Nav as ReactNav,
  Dropdown,
} from "react-bootstrap";

/**
 * Nav component
 */
export const Navbar: React.FC<NavProps> = () => {
  return (
    <UI.Navbar expand="sm">
      <ReactNavbar.Brand>
        <ReactNavbar.Toggle aria-controls="navbar-responsive-dropdown" />
        <UI.NavbarLogo
          src="events/img/logos/main.png"
          className="d-none d-sm-block" // Hide icon below sm screens.
        ></UI.NavbarLogo>
      </ReactNavbar.Brand>
      <ReactNavbar.Collapse
        id="navbar-responsive-dropdown"
        className="justify-content-center"
      >
        <UI.Nav>
          <UI.NavLink href="/#home">Home</UI.NavLink>
          <UI.NavLink href="/#about">About</UI.NavLink>
          <UI.NavLink href="/#sponsors">Sponsors</UI.NavLink>
        </UI.Nav>
      </ReactNavbar.Collapse>
      <Dropdown className="nav-item">
        <UI.NavbarDropdownToggle id="navbar-account-dropdown">
          <FontAwesomeIcon icon={faUserCircle} size="lg" />
        </UI.NavbarDropdownToggle>
        <Dropdown.Menu className="dropdown-menu-right">
          <Dropdown.Item>Chinmay Phulse</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </UI.Navbar>
  );
};

Navbar.propTypes = {
  navItems: PropTypes.any.isRequired,
};
