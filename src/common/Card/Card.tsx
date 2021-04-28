import React from "react";
import { Reminder } from "./Reminder";
import * as UI from "./style";
import PropTypes from "prop-types";
import { ActivityCardProps } from "./interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import moment from "moment-timezone";
import Link from "next/link";

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
    moment(time).tz(moment.tz.guess()).format("MMMM Do h:mm a") +
    " to " +
    moment(new Date(time.getTime() + duration * 60000))
      .tz(moment.tz.guess())
      .format("h:mm a") +
    ` (${moment(time).tz(moment.tz.guess()).format("z")})`
  );
};

/**
 * Card component
 */
export const Card: React.FC<ActivityCardProps> = ({ event }) => {
  const startTime = new Date(event.startTime);
  return (
    <UI.StyledCard>
      <UI.EventImgContainer>
        <UI.EventImg src={event.thumbnail} alt="" />
        <Reminder startTime={startTime} duration={event.duration} />
      </UI.EventImgContainer>
      <UI.EventInfo>
        <h5>{event.name}</h5>
        <UI.EventTime>
          {formatTime(new Date(event.startTime), event.duration)}
        </UI.EventTime>
      </UI.EventInfo>
      <UI.PeelLinkContainer>
        <UI.LinkArrow href={event.infoUrl || "#"}></UI.LinkArrow>
        <UI.LinkPeelCover></UI.LinkPeelCover>
        <UI.PeelEffect href={event.infoUrl || "#"}></UI.PeelEffect>
      </UI.PeelLinkContainer>
    </UI.StyledCard>
  );
};

Card.propTypes = {
  event: PropTypes.any.isRequired,
};
