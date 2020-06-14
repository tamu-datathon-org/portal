import React from "react";
import { useState, useEffect } from "react";
import { Card } from "../Card";
import { Section } from "./interfaces";
import * as UI from "./style";
import PropTypes from "prop-types";

export const Set: React.FC<Section> = ({ info }) => {
  const [eventList, setEventList] = useState(info.eventList.slice(0, 4));
  const [showMore, setShowMore] = useState(false);
  const [btnText, setBtnText] = useState("Show More");

  // updates the set component if when the show more status has been changed
  useEffect(() => {
    if (showMore) {
      setEventList(info.eventList);
      setBtnText("Show Less");
    } else {
      setEventList(info.eventList.slice(0, 4));
      setBtnText("Show More");
    }
  }, [showMore]);

  // if window size gets smaller than 1200px, show all events at once
  useEffect(() => {
    if (window.innerWidth < 1200) {
      setShowMore(true);
    }
  }, []);

  const toggleEventsDisplay = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <UI.SectionInfo>
        <UI.SectionTitle>{info.SectionTitle}</UI.SectionTitle>
        <UI.SectionDescription>{info.sectionDescription}</UI.SectionDescription>
      </UI.SectionInfo>
      <UI.CardsContainer>
        {eventList.map((card) => (
          <Card
            key={
              Math.random().toString() +
              card.event.title +
              card.event.startTime +
              card.event.duration
            }
            event={card.event}
          />
        ))}
      </UI.CardsContainer>
      <UI.ShowBtnContainer>
        <UI.Hr />
        <UI.ShowBtn onClick={toggleEventsDisplay}>{btnText}</UI.ShowBtn>
        <UI.Hr />
      </UI.ShowBtnContainer>
    </>
  );
};

Set.propTypes = {
  info: PropTypes.any.isRequired,
};
