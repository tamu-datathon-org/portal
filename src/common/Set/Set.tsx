import React from "react";
import { useState, useEffect } from "react";
import { Card } from "../Card";
import { SetProps } from "./interfaces";
import * as UI from "./style";
import { useCurrentTime } from "../hooks";
import PropTypes from "prop-types";

// Time constants for clarity
const TIME_BEFORE_SHOW_BADGE_MS = 15 * 60000;

/**
 * Set component
 */
export const Set: React.FC<SetProps> = ({ info }) => {
  const currentTime = useCurrentTime();
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

  /** Applies all filters and sorts if specified */
  const transformedEventList = React.useMemo(() => {
    let currArr = eventList;
    if (info.orderedBy === "alphabetical") {
      currArr = currArr.sort((a, b) =>
        a.event.name.localeCompare(b.event.name)
      );
    } else if (info.orderedBy === "start_time") {
      currArr = currArr.sort(
        (a, b) =>
          new Date(a.event.startTime).getTime() -
          new Date(b.event.startTime).getTime()
      );
    }

    if (info.filteredBy === "happening_now") {
      // this is dumb af, i know
      currArr = currArr.filter(
        (item) =>
          currentTime.getTime() >
            new Date(item.event.startTime).getTime() -
              TIME_BEFORE_SHOW_BADGE_MS &&
          currentTime.getTime() <
            new Date(
              item.event.endTime ||
                new Date(item.event.startTime).getTime() +
                  item.event.duration * 60 * 1000
            ).getTime()
      );
    }

    return currArr;
  }, [eventList, info.orderedBy, info.filteredBy, currentTime]);

  /* Toggles whether the set is displayed fully or partially */
  const toggleEventsDisplay = () => {
    setShowMore(!showMore);
  };

  if (transformedEventList.length <= 0) {
    return <></>;
  }

  return (
    <>
      <UI.SectionInfo>
        <h4>{info.sectionTitle}</h4>
        <p>{info.sectionDescription}</p>
      </UI.SectionInfo>
      <UI.CardsContainer>
        {transformedEventList.map((card) => (
          <Card
            key={card.event.name + card.event.startTime + card.event.duration}
            event={card.event}
          />
        ))}
      </UI.CardsContainer>
      {info.eventList.length > 4 ? (
        <UI.ShowBtnContainer>
          <UI.Hr />
          <UI.ShowBtn onClick={toggleEventsDisplay}>{btnText}</UI.ShowBtn>
          <UI.Hr />
        </UI.ShowBtnContainer>
      ) : (
        <UI.ShowBtnContainer>
          <UI.Hr />
        </UI.ShowBtnContainer>
      )}
    </>
  );
};

Set.propTypes = {
  info: PropTypes.any.isRequired,
};
