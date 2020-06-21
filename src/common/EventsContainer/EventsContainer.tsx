import React from "react";
import { Row } from "react-bootstrap";
import PropTypes from "prop-types";

import { Card } from "../Card";
import * as UI from "./style";
import { EventsContainerProps } from "./interfaces";

/**
 * Events Container (styling in progress)
 */
export const EventsContainer: React.FC<EventsContainerProps> = ({ events }) => {
  const renderEvents = events.map((event) => <Card event={event} />);

  return (
    <UI.EventsContainer>
      <Row>
        {renderEvents}
      </Row>
    </UI.EventsContainer>
  );
};

EventsContainer.propTypes = {
  events: PropTypes.array.isRequired,
};
