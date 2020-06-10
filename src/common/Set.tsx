import React from "react";
import shortid from "shortid";
import { useState, useEffect } from "react";
import { Card } from "./Card";
import { Section } from "./interfaces";
import styled from "styled-components";

export const Section_info = styled.div`
  margin-bottom: 0.75em;
`;
export const Section_title = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 1.5em;
  font-weight: bolder;
`;
export const Section_description = styled.div`
  font-family: "Roboto Mono", monospace;
  font-weight: 100;
`;
export const Cards_container = styled.div`
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: auto auto auto auto;
  @media (max-width: 1200px) {
    display: flex;
    overflow: scroll;
  }
`;
export const Show_btn_container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
`;
export const Show_btn = styled.button`
  padding: 0.6em 1.2em;
  min-width: max-content;
  background-color: white;
  border-radius: 20px;
  color: #00109b;
  border: 1px solid #dbdbdb;
  cursor: pointer;
  font-size: 0.75em;
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const Hr = styled.hr`
  border: 0px;
  border-top: 1px solid #ccc;
  margin: 1em;
  width: 100%;
  @media (max-width: 1200px) {
    border: 0px;
    border-top: 1px solid #ccc;
    margin: 1em 0em;
    width: 100%;
  }
`;

export const Set: React.FC<Section> = ({ info }) => {
  const [event_list, set_event_list] = useState(info.event_list.slice(0, 4));
  const [show_more, set_show_more] = useState(false);
  const [btn_text, set_btn_text] = useState("Show More");

  useEffect(() => {
    if (show_more) {
      set_event_list(info.event_list);
      set_btn_text("Show Less");
    } else {
      set_event_list(info.event_list.slice(0, 4));
      set_btn_text("Show More");
    }
  }, [show_more]);

  useEffect(() => {
    if (window.innerWidth < 1200) {
      toggleEventsDisplay();
    }
  }, []);

  const toggleEventsDisplay = () => {
    set_show_more(!show_more);
  };

  return (
    <>
      <Section_info>
        <Section_title>{info.section_title}</Section_title>
        <Section_description>{info.section_description}</Section_description>
      </Section_info>
      <Cards_container>
        {event_list.map((card) => (
          <Card key={shortid.generate()} event={card.event} />
        ))}
      </Cards_container>
      <Show_btn_container>
        <Hr />
        <Show_btn onClick={toggleEventsDisplay}>{btn_text}</Show_btn>
        <Hr />
      </Show_btn_container>
    </>
  );
};
