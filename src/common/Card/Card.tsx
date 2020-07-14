import React from "react";
import { Reminder } from "./Reminder";
import * as UI from "./style";
import PropTypes from "prop-types";
import { ActivityCardProps } from "./interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

/**
 * Formats date to a string for the start and end time.
 * @param time a date object
 * @param duration a number in minutes
 */
export const formatTime = (time: Date, duration: number): string => {
  /**
   * returns string in HH:MM(AM/PM) format
   * @param time a date object
   */

  return (
    moment(time).format("MMMM Do h:mm a") +
    " to " +
    moment(new Date(time.getTime() + duration * 60000)).format("h:mm a")
  );
};

/**
 * Card component
 */
export const Card: React.FC<ActivityCardProps> = ({ event }) => {
  return (
    <UI.StyledCard>
      <UI.EventImgContainer>
        <UI.EventImg src={event.imgUrl} alt="" />
        <Reminder
          startTime={new Date(event.startTime)}
          duration={event.duration}
        />
      </UI.EventImgContainer>
      <UI.EventInfo>
        <h5>{event.title}</h5>
        <UI.EventTime>
          {formatTime(new Date(event.startTime), event.duration)}
        </UI.EventTime>
        <UI.EventInfoLinkContainer>
          <UI.EventInfoLink href={event.infoUrl || "#"}>
            Learn more <FontAwesomeIcon icon={faArrowRight} />
          </UI.EventInfoLink>
        </UI.EventInfoLinkContainer>
      </UI.EventInfo>
    </UI.StyledCard>
  );
};

Card.propTypes = {
  event: PropTypes.any.isRequired,
};
