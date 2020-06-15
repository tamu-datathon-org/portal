import React from "react";
import { useState, useEffect } from "react";
import { Card } from "../Card";
import { Section } from "./interfaces";
import * as UI from "./style";
import PropTypes from "prop-types";

/**
 * Set component
 */
export const Set: React.FC<Section> = ({ info }) => {
  let listSize: number;
  if (info.isCollapsible) {
    listSize = 4;
  } else {
    listSize = info.eventList.length;
  }
  const [eventList, setEventList] = useState(info.eventList.slice(0, listSize));
  const [showMore, setShowMore] = useState(!info.isCollapsible);
  const [btnText, setBtnText] = useState("Show More");

  /* Updates the set component if when the show more status has been changed */
  useEffect(() => {
    if (showMore) {
      setEventList(info.eventList);
      setBtnText("Show Less");
    } else {
      setEventList(info.eventList.slice(0, 4));
      setBtnText("Show More");
    }
  }, [showMore]);

  /* If window size gets smaller than 1200px, show all events at once */
  useEffect(() => {
    if (window.innerWidth < 1200) {
      setShowMore(true);
    }
  }, []);

  /* Toggles whether the set is displayed fully or partially */
  const toggleEventsDisplay = () => {
    setShowMore(!showMore);
  };

  /**
   * I don't think writing code inside jsx is possible so this is the only way to change whether the showMore btn is visible
   * unless we create a new component for it (or someone can let me know of a better way to accomplish this)
   */
  if (info.isCollapsible) {
    return (
      <>
        <UI.SectionInfo>
          <h4>{info.SectionTitle}</h4>
          <p>{info.sectionDescription}</p>
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
  } else {
    return (
      <>
        <UI.SectionInfo>
          <h4>{info.SectionTitle}</h4>
          <p>{info.sectionDescription}</p>
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
          <UI.HrFull />
        </UI.ShowBtnContainer>
      </>
    );
  }
};

Set.propTypes = {
  info: PropTypes.any.isRequired,
};
