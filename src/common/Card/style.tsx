import styled, { keyframes } from "styled-components";

const peelAnimation = keyframes`
  0% {
    clip-path: polygon(100% 0, 100% 100%, 100% 100%, 0 100%);
  }
  100% {
    clip-path: polygon(100% 0, 100% 0, 0 100%, 0% 100%);
  }
`;
const peelAnimationUndo = keyframes`
  0% {
    clip-path: polygon(100% 0, 100% 0, 0 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(100% 0, 100% 100%, 100% 100%, 0 100%);
  }
`;
const peelAnimationShow = keyframes`
  0% {
    clip-path: polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%);
  }
  100% {
    clip-path: polygon(0 0, 0 0, 100% 1%, 1% 100%);
  }
`;
const peelAnimationShowUndo = keyframes`
  0% {
    clip-path: polygon(0 0, 0 0, 100% 1%, 1% 100%);
  }
  100% {
    clip-path: polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%);
  }
`;

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

  --peel-effect-animation-hide: ${peelAnimationUndo};
  --peel-effect-animation-show: ${peelAnimationShowUndo};
  &:hover {
    --peel-effect-animation-hide: ${peelAnimation};
    --peel-effect-animation-show: ${peelAnimationShow};
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
`;

export const PeelLinkContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const LinkArrow = styled.a`
  clip-path: polygon(100% 100%, 100% 100%, 100% 1%, 1% 100%);
  background-image: url("/events/static/img/effects/learn_more_arrow.png");
  background-size: 100%;
  width: 40px;
  height: 40px;
`;

export const LinkPeelCover = styled.div`
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  background-color: #ebebeb;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  z-index: 2;
  animation-name: var(--peel-effect-animation-hide);
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`;

export const PeelEffect = styled.a`
  clip-path: polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%);
  background-color: ${(props) => props.theme.colors.theme_light_purple};
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  z-index: 2;
  animation-name: var(--peel-effect-animation-show);
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
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
