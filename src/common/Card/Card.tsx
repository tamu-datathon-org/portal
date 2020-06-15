import React from "react";
import { CardInterface } from "../Set/interfaces";
import { formatTime } from "./helper";
import { Reminder } from "./Reminder";
import * as UI from "./style";
import PropTypes from "prop-types";

/**
 * Card component
 */
export const Card: React.FC<CardInterface> = ({ event }) => {
  return (
    <UI.StyledCard>
      <UI.EventImgContainer>
        <UI.EventImg src={event.imgUrl} alt="" />
        <Reminder startTime={event.startTime} duration={event.duration} />
      </UI.EventImgContainer>
      <UI.EventInfo>
        <h4>{event.title}</h4>
        <UI.EventTime>
          {formatTime(event.startTime, event.duration)}
        </UI.EventTime>
        <UI.EventInfoLinkContainer>
          <UI.EventInfoLink href={event.infoUrl || "#"}>
            Learn more <i className="fas fa-arrow-right"></i>
          </UI.EventInfoLink>
        </UI.EventInfoLinkContainer>
      </UI.EventInfo>
    </UI.StyledCard>
  );
};

Card.propTypes = {
  event: PropTypes.any.isRequired,
};
