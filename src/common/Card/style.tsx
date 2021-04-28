import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  --hover-effect-img: url("/events/static/img/effects/learn_more_cover.png");
  &:hover {
    --hover-effect-img: url("/events/static/img/effects/learn_more_arrow.png");
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

export const LinkPeelCover = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  background-image: var(--hover-effect-img);
  background-size: 100%;
  width: 40px;
  height: 40px;
  z-index: 2;
`;

export const EventInfoLinkContainer = styled.div`
  text-align: right;
  margin-top: 0.75em;
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
