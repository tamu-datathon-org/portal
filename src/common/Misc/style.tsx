import styled from "styled-components";
import { Container, Nav } from "react-bootstrap";

export const NavPillsContainer = styled(Container)`
  margin-top: 1.4em;
  margin-bottom: 0.5em;
`;

export const CustomHeader = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

export const ColorSpan = styled.span`
  color: ${(props) => props.theme.colors.indigo};
  font-weight: bold;
  box-shadow: 0 -0.8em 0 0 ${(props) => props.theme.colors.gray100} inset;
  text-decoration: underline;
`;

export const EventsBlueWrapper = styled.div`
  background: ${(props) => props.theme.colors.gray100};
`;

export const NavItem = styled(Nav.Item)`
  margin: 0 0.5rem;
  .active {
    color: ${(props) => props.theme.colors.indigo} !important;
    background-color: ${(props) => props.theme.colors.gray100} !important;
  }
`;

export const NavAnchor = styled(Nav.Link)`
  padding: 0.2rem 0.5rem;
`;
