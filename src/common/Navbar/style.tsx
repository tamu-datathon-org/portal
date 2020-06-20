import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar as ReactNavbar,
  Nav as ReactNav,
  Dropdown,
} from "react-bootstrap";

export const Navbar = styled(ReactNavbar)`
  border-bottom: solid 1px #cfcfcf;
`;

export const NavbarLogo = styled.img`
  width: 40px;
  height 40px;
`;

export const NavLink = styled(ReactNav.Link)`
  padding: 10px 15px !important;
  color: #00109b !important;
`;

export const NavbarAccountSpan = styled.span`
  display: inline-flex;
  align-items: center;
`;

export const NavUserInfoDivider = styled.hr`
  margin: 10px auto;
`;

export const NavUserInfo = styled.small`
  padding: 10px 15px;
`;

export const DropdownLink = styled.a`
  color: #00109b !important;
  margin: 10px auto;
  display: block;

  &:hover {
    text-decoration: none;
  }
`;

export const NavbarDropdownToggle = styled(Dropdown.Toggle)`
  &,
  &:hover,
  &:focus {
    background: transparent !important;
    border: none !important;
    color: #00109b !important;
    padding: 0 !important;
  }
`;

export const NavbarUserIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
`;

export const NavbarLoginLink = styled.a`
  &,
  &:hover,
  &:focus {
    color: #00109b;
  }
`;
