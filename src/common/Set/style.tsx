import styled from "styled-components";

export const SectionInfo = styled.div`
  margin-bottom: 0.75em;
`;
export const SectionTitle = styled.div`
  font-size: 1.5em;
  font-weight: bolder;
`;
export const SectionDescription = styled.div`
  font-weight: 100;
`;
export const CardsContainer = styled.div`
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: auto auto auto auto;
  @media (max-width: 1200px) {
    display: flex;
    overflow: auto;
    & > div {
      width: 80vw;
      max-width: 350px;
    }
    &::-webkit-scrollbar {
      display: none;
      -webkit-appearance: none;
    }
  }
`;
export const ShowBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 0em;
`;
export const ShowBtn = styled.button`
  padding: 0.6em 1.2em;
  min-width: max-content;
  background-color: white;
  border-radius: 20px;
  color: #00109b;
  border: 1px solid #dbdbdb;
  cursor: pointer;
  font-size: 0.75em;
  margin: 0em 1em;
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const Hr = styled.hr`
  border: 0px;
  border-top: 1px solid #ccc;
  margin: 1em 0em;
  width: 100%;
  @media (max-width: 1200px) {
    border: 0px;
    border-top: 1px solid #ccc;
    margin: 1em 0em;
    width: 100%;
  }
`;
export const HrFull = styled.hr`
  border: 0px;
  border-top: 1px solid #ccc;
  margin: 1em 0em;
  width: 100%;
  @media (max-width: 1200px) {
    border: 0px;
    border-top: 1px solid #ccc;
    margin: 1em 0em;
    width: 100%;
  }
`;
