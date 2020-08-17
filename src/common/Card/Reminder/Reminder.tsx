import React, { useEffect } from "react";
import { useState } from "react";
import { ReminderProps } from "../interfaces";
import * as UI from "./style";
import PropTypes from "prop-types";

// Time constants for clarity
const TIME_UNTIL_HIDE_BADGE_MS = 1440 * 60000;
const TIME_BEFORE_SHOW_BADGE_MS = 15 * 60000;
/**
 * Reminder component
 */
export const Reminder: React.FC<ReminderProps> = ({ startTime, duration }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  // I think this is minutes since the START of the event
  const mins = Math.ceil((startTime.getTime() - currentTime.getTime()) / 60000);
  const millisecondsSinceEnded = (Math.abs(mins) - duration) * 60000;

  /* Updates the reminder every 15 seconds */
  useEffect(() => {
    const checker = setInterval(() => {
      setCurrentTime(new Date());
    }, 15000);
    return () => clearInterval(checker);
  }, []);

  /* Displays the reminder status if start time is less than 15 minutes away */
  if (startTime.getTime() - currentTime.getTime() < TIME_BEFORE_SHOW_BADGE_MS) {
    let message = `Starts in ${mins.toString()} minutes`;
    if (mins < 0) {
      if (duration + mins > 0) {
        message = "Ongoing";
      } else if (millisecondsSinceEnded < TIME_UNTIL_HIDE_BADGE_MS) {
        message = "Ended";
        return <UI.StyledExpiredReminder>{message}</UI.StyledExpiredReminder>;
      } else {
        return <></>;
      }
    }
    return <UI.StyledReminder>{message}</UI.StyledReminder>;
  } else {
    return <></>;
  }
};

Reminder.propTypes = {
  startTime: PropTypes.any.isRequired,
};
