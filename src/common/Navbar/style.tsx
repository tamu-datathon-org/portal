import styled from "styled-components";
import {
  Navbar as ReactNavbar,
  Nav as ReactNav,
  Dropdown,
} from "react-bootstrap";

export const Navbar = styled(ReactNavbar)`
  border-bottom: solid 1px #cfcfcf;
  background-color: #fafafa;
`;

export const NavbarLogo = styled.img`
  width: 40px;
  height 40px;
`;

export const Nav = styled(ReactNav)`
  float: center;
`;

export const NavLink = styled(Nav.Link)`
  color: #00109b !important;
`;

export const NavbarDropdownToggle = styled(Dropdown.Toggle)`
  background: transparent;
  border: none;
  color: blue;

  &:hover {
    background: transparent;
    border: none;
    color: blue;
  }
`;
