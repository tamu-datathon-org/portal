import styled from "styled-components";
import { Container, Nav as _Nav } from "react-bootstrap";

export const Nav = styled(_Nav)`
  margin-left: -0.5em;
  margin-right: -0.5em;
`;

export const NavPillsContainer = styled(Container)`
  margin-top: 1.4em;
  margin-bottom: 0.5em;
`;

export const CustomHeader = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

export const ColorSpan = styled.span`
  color: ${(props) => props.theme.colors.theme_dark_purple};
  font-weight: bold;
  box-shadow: 0 -0.5em 0 0 ${(props) => props.theme.colors.theme_lighter_blue} inset;
`;

export const EventsBlueWrapper = styled.div`
  background: ${(props) => props.theme.colors.theme_lighter_blue};
  min-height: 80vh;
  padding-bottom: 5em;
`;

export const _NavItem = styled(Nav.Item)`
  margin: 0 0.5rem;
  .active {
    color: ${(props) => props.theme.colors.theme_dark_purple} !important;
    background-color: ${(props) =>
      props.theme.colors.highlight_purple} !important;
  }
`;

export const NavAnchor = styled(Nav.Link)`
  padding: 0.2rem 0.5rem;
`;
