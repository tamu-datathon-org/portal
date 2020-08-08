import React, { useEffect } from "react";
import { useState } from "react";
import { ReminderProps } from "../interfaces";
import * as UI from "./style";
import PropTypes from "prop-types";

// Time constants for clarity
const ONE_DAY_MINUTES = 1440;
const FIFTEEN_MIN_MS = 15 * 60000;
/**
 * Reminder component
 */
export const Reminder: React.FC<ReminderProps> = ({ startTime, duration }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  // I think this is minutes since the START of the event
  const mins = Math.ceil((startTime.getTime() - currentTime.getTime()) / 60000);
  const minutesSinceEnded = Math.abs(mins) - duration;

  /* Updates the reminder every 15 seconds */
  useEffect(() => {
    const checker = setInterval(() => {
      setCurrentTime(new Date());
    }, 15000);
    return () => clearInterval(checker);
  }, []);

  /* Displays the reminder status if start time is less than 15 minutes away */
  if (startTime.getTime() - currentTime.getTime() < FIFTEEN_MIN_MS) {
    let message = `Starts in ${mins.toString()} minutes`;
    if (mins < 0) {
      if (duration + mins > 0) {
        message = "Ongoing";
      } else if (minutesSinceEnded < ONE_DAY_MINUTES) {
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
