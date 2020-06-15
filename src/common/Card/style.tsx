import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  overflow: hidden;
  @media only screen and (max-width: 1200px) {
    flex-grow: 0;
    flex-shrink: 0;
    margin: 0.5em;
  }
`;

export const EventImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 145px;
  background-color: #f7ffe1;
  overflow: hidden;
`;

export const EventImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const EventInfo = styled.div`
  padding: 0.75em;
`;

export const EventTitle = styled.div`
  font-weight: bold;
  font-size: 1.1em;
`;

export const EventTime = styled.p`
  font-weight: 300;
`;

export const EventInfoLinkContainer = styled.div`
  text-align: right;
  margin-top: 0.75em;
`;

export const EventInfoLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  background-image: linear-gradient(#c3e5ff 0%, #c3e5ff 100%);
  background-size: 100% 0.8em;
  background-repeat: no-repeat;
  background-position: 0px 6px;
  color: #00109b;
  padding: 0em 0em 0.25em 0.25em;
`;
