import styled from "styled-components";

export const MediaContainer = styled.div`
  width: 100%;
  background: black;
  display: flex;
  justify-content: center;
`;

export const ZoomContainer = styled.div`
  width: 100%;
  padding: 1em 10em;
  background-color: #f8fafd;
`;

export const Button = styled.a`
  display: block;
  width: 100%;
  margin: 0px;
  border-radius: 0.25rem;
  padding: 0.25em 1em;
  background: #00109b;
  margin-bottom: 1em;
  border: 1px solid #00109b;
  color: white;
  text-align: center;
  :hover {
    color: white;
    text-decoration: none;
  }
`;

export const BtnText = styled.h5`
  margin: 0px;
`;
