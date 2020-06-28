import styled from "styled-components";

export const MediaContainer = styled.div`
  width: 100%;
  min-height: 500px;
  background: black;
  display: flex;
  justify-content: center;
`;

export const ZoomContainer = styled.div`
  width: 100%;
  padding: 1em 10em;
  background-color: #f8fafd;
  color: #112199;
  display: flex;
`;

export const YtMedia = styled.iframe`
  height: 500px;
  width: 50%;
`;

export const Flexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5em;
`;

export const InfoContainer = styled.div`
  width: 80%;
`;

export const Button = styled.a`
  width: 18em;
  border-radius: 0.25rem;
  padding: 1em 1em;
  background: #112199;
  border: 0px;
  color: white !important;
  text-align: center;
  font-weight: bold;
`;

export const BtnText = styled.h5`
  margin: 0px;
`;
