import styled from "styled-components";

export const MediaWrapper = styled.div`
  background: black;
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: calc((100vw / 16) * 9);
`;

export const MeetingWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.highlight_blue} !important;
  color: #00109b;
  padding: 2em 0em;
`;
