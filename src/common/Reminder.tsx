import React from "react";
import { useState } from "react";
import { ReminderInterface } from "./interfaces";
import styled from "styled-components";

export const StyledReminder = styled.div`
  background: #ff7a7a;
  color: white;
  font-size: 0.7em;
  font-weight: bold;
  padding: 0.5em;
  position: absolute;
  top: 1em;
  left: 1em;
  border-radius: 8px;
`;

export const Reminder: React.FC<ReminderInterface> = ({
  start_time,
  duration,
}) => {
  const [current_time, set_current_time] = useState(new Date());
  //   const checker = setInterval(() => {
  //     set_current_time(new Date());
  //   }, 15000);

  if (start_time.getTime() - current_time.getTime() < 15 * 60000) {
    const mins = Math.ceil(
      (start_time.getTime() - current_time.getTime()) / 60000
    );
    let message = "Starts in " + mins.toString() + " minutes";
    if (mins < 0) {
      message = duration + mins > 0 ? "Ongoing" : "Ended";
      //   clearInterval(checker);
    }
    return <StyledReminder>{message}</StyledReminder>;
  } else {
    return <></>;
  }
};
