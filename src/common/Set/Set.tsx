import React from "react";
import { useState, useEffect } from "react";
import { Card } from "../Card";
import { SetProps } from "./interfaces";
import * as UI from "./style";
import { useCurrentTime } from "../hooks";
import PropTypes from "prop-types";
import { genEndTime } from "../../libs/utils";

import { TIME_BEFORE_SHOW_BADGE_MS } from "../../constants";

/**
 * Set component
 */
export const Set: React.FC<SetProps> = ({ info }) => {
  const currentTime = useCurrentTime();
  const [eventList, setEventList] = useState(
    info.activityListPopulated.slice(
      0,
      !info.showMoreState ? 4 : info.activityListPopulated.length
    )
  );
  const [showMore, setShowMore] = useState(info.showMoreState);
  const [btnText, setBtnText] = useState(
    !info.showMoreState ? "Show More" : "Show Less"
  );

  /* Updates the set component if when the show more status has been changed */
  useEffect(() => {
    if (showMore) {
      setEventList(info.activityListPopulated);
      setBtnText("Show Less");
    } else {
      setEventList(info.activityListPopulated.slice(0, 4));
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
    if (info.orderBy === "alphabetical") {
      currArr = currArr.sort((a, b) =>
        a.event.name.localeCompare(b.event.name)
      );
    } else if (info.orderBy === "start_time") {
      currArr = currArr.sort(
        (a, b) =>
          new Date(a.event.startTime).getTime() -
          new Date(b.event.startTime).getTime()
      );
    }

    if (info.filterBy === "happening_now") {
      // this is dumb af, i know
      // yes it is, please replace "a" and "b" with descriptive names
      currArr = currArr.filter((item) => {
        const startTime = new Date(item.event.startTime);
        const durationMinutes = item.event.duration;
        // a --> is within 15 min of start or beyond?
        const afterStartBuffer =
          currentTime.getTime() >
          startTime.getTime() - TIME_BEFORE_SHOW_BADGE_MS;
        const beforeEventEnd =
          currentTime.getTime() <
          genEndTime(startTime, durationMinutes).getTime();
        return afterStartBuffer && beforeEventEnd;
      });
    }

    return currArr;
  }, [eventList, info.orderBy, info.filterBy, currentTime]);

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
        <h4>{info.name}</h4>
        <p>{info.description}</p>
      </UI.SectionInfo>
      <UI.CardsContainer>
        {transformedEventList.map((card) => (
          <Card
            key={card.event.name + card.event.startTime + card.event.duration}
            event={card.event}
          />
        ))}
      </UI.CardsContainer>
      {info.activityListPopulated.length > 4 ? (
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
