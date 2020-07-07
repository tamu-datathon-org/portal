import styled from "styled-components";

export const MediaWrapper = styled.div`
  background: black;
`;

export const MeetingWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.highlight_blue} !important;
  color: #00109b;
  padding: 2em 0em;
`;
