import styled from "styled-components";
import { Container, Nav } from "react-bootstrap";

export const NavPillsContainer = styled(Container)`
  margin-top: 1.4em;
  margin-bottom: 0.5em;
`;

export const CustomHeader = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

export const EventsBlueWrapper = styled.div`
  background: ${(props) => props.theme.colors.theme_lighter_blue};
`;

export const ColorSpan = styled.span`
  box-shadow: 0 -0.5em 0 0 ${(props) => props.theme.colors.theme_lighter_blue} inset;
  text-decoration: underline;
`;

export const NavItem = styled(Nav.Item)`
  margin: 0 0.5rem;
  .active {
    color: #4740af !important;
    background-color: ${(props) =>
      props.theme.colors.theme_lighter_blue}!important;
  }
`;

export const NavAnchor = styled(Nav.Link)`
  padding: 0.2rem 0.5rem;
`;
