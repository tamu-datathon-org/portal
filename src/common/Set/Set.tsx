import React from "react";
import { useState, useEffect } from "react";
import { Card } from "../Card";
import { SetProps } from "./interfaces";
import * as UI from "./style";
import PropTypes from "prop-types";

/**
 * Set component
 */
export const Set: React.FC<SetProps> = ({ info }) => {
  const [eventList, setEventList] = useState(
    info.eventList.slice(
      0,
      !info.defaultShowMoreState ? 4 : info.eventList.length
    )
  );
  const [showMore, setShowMore] = useState(info.defaultShowMoreState);
  const [btnText, setBtnText] = useState(
    !info.defaultShowMoreState ? "Show More" : "Show Less"
  );

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

  return (
    <>
      <UI.SectionInfo>
        <h4>{info.sectionTitle}</h4>
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
};

Set.propTypes = {
  info: PropTypes.any.isRequired,
};
