import React, { useEffect } from "react";
import { useState, useMemo } from "react";
import { ReminderProps } from "../interfaces";
import * as UI from "./style";
import PropTypes from "prop-types";

import { TIME_UNTIL_HIDE_BADGE_MS, TIME_BEFORE_SHOW_BADGE_MS } from "../../../constants";

const minutesSinceStartMemo = (a: Date, b: Date) => {
  return Math.ceil((a.getTime() - b.getTime()) / 60000);
};

/**
 * Reminder component
 */
// duration = minutes, startTime = Date object
export const Reminder: React.FC<ReminderProps> = ({ startTime, duration }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  // if an event started 2 hours ago & ended 1 hour ago
  // minutesUntilStart is equal to -120
  const minutesUntilStart = useMemo(
    () => minutesSinceStartMemo(startTime, currentTime),
    [startTime, currentTime, minutesSinceStartMemo]
  );
  const millisecondsSinceEnded =
    (Math.abs(minutesUntilStart) - duration) * 60000;
  /* Updates the reminder every 15 seconds */
  useEffect(() => {
    const checker = setInterval(() => {
      setCurrentTime(new Date());
    }, 15000);
    return () => clearInterval(checker);
  }, []);

  /* Displays the reminder status if start time is less than 15 minutes away */
  if (startTime.getTime() - currentTime.getTime() < TIME_BEFORE_SHOW_BADGE_MS) {
    let message = `Starts in ${minutesUntilStart} minutes`;
    // value is negative if the event is ongoing or past
    if (minutesUntilStart < 0) {
      // if minsUntilStart is negative then adding duration (minutes) should make the sum positive
      if (duration + minutesUntilStart > 0) {
        message = "Happening Now";
      } else if (millisecondsSinceEnded < TIME_UNTIL_HIDE_BADGE_MS) {
        // show ended badge if endTime < 24 hours ago
        message = "Ended";
        return <UI.StyledExpiredReminder>{message}</UI.StyledExpiredReminder>;
      } else {
        // otherwise, we're beyond 1 day of event ending, don't show anything
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
