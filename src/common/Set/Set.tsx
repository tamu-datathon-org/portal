import React from "react";
import shortid from "shortid";
import { useState, useEffect } from "react";
import { Card } from "../Card";
import { Section } from "./interfaces";
import * as UI from "./style";

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
      <UI.Section_info>
        <UI.Section_title>{info.section_title}</UI.Section_title>
        <UI.Section_description>
          {info.section_description}
        </UI.Section_description>
      </UI.Section_info>
      <UI.Cards_container>
        {event_list.map((card) => (
          <Card key={shortid.generate()} event={card.event} />
        ))}
      </UI.Cards_container>
      <UI.Show_btn_container>
        <UI.Hr />
        <UI.Show_btn onClick={toggleEventsDisplay}>{btn_text}</UI.Show_btn>
        <UI.Hr />
      </UI.Show_btn_container>
    </>
  );
};
