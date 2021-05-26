import styled, { keyframes } from "styled-components";

export const StyledCard = styled.div`
  background-color: white;
  border: 5px solid ${(props) => props.theme.colors.theme_dark_purple};
  box-shadow: 5px 5px 0px ${(props) => props.theme.colors.theme_light_purple};
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media only screen and (max-width: 1200px) {
    flex-grow: 0;
    flex-shrink: 0;
    margin: 0.5em;
  }

  --transition-speed: 200ms;
  --cover-clip-path: polygon(100% 0, 100% 100%, 100% 100%, 0% 100%);
  --peel-clip-path: polygon(100% 100%, 100% 100%, 100% 100%);
  --arrow-clip-path: polygon(100% 100%, 100% 100%, 100% 100%);
  &:hover {
    --cover-clip-path: polygon(100% 0, 100% 0, 0 100%, 0% 100%);
    --peel-clip-path: polygon(100% 1%, 1% 100%, 0 0);
    --arrow-clip-path: polygon(100% 0, 0 100%, 100% 100%);
  }
`;

export const EventImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 145px;
  background-color: #f9fee3;
  overflow: hidden;
`;

export const EventImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const EventInfo = styled.div`
  position: relative;
  padding: 0.75em;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 0px;
`;

export const EventTitle = styled.h4`
  font-weight: bold;
  font-size: 1.1em;
`;

export const EventTime = styled.p`
  font-weight: 300;
  flex: 1;
  margin-bottom: 0px;
`;

export const PeelLinkContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const LinkArrow = styled.a`
  clip-path: var(--arrow-clip-path);
  background-image: url("/events/static/img/effects/learn_more_arrow.png");
  background-size: 100%;
  width: 40px;
  height: 40px;
  transition: var(--transition-speed);
`;

export const LinkPeelCover = styled.div`
  clip-path: var(--cover-clip-path);
  background-color: #ebebeb;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  z-index: 2;
  transition: var(--transition-speed);
`;

export const PeelEffect = styled.a`
  clip-path: var(--peel-clip-path);
  background-color: ${(props) => props.theme.colors.theme_light_purple};
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  z-index: 2;
  transition: var(--transition-speed);
`;

export const EventInfoLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  background-image: linear-gradient(
    ${(props) => props.theme.colors.highlight_blue} 0%,
    ${(props) => props.theme.colors.highlight_blue} 100%
  );
  background-size: 100% 0.8em;
  background-repeat: no-repeat;
  background-position: 0px 6px;
  color: #00109b;
  padding: 0em 0em 0.25em 0.25em;
`;
