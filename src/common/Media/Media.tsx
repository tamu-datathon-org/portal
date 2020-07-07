import React from "react";
import * as UI from "./style";
import { Col, Row, Container, Button } from "react-bootstrap";

export interface MediaProps {
  type: "embed_url" | "meeting_url";
  link: string;
}

export const Media: React.FC<MediaProps> = (props: MediaProps) => {
  if (props.type === "embed_url") {
    return (
      <>
        <UI.MediaWrapper>
          <Container>
            <Row lg="1">
              <iframe
                width="800"
                height="450"
                src={props.link}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Row>
          </Container>
        </UI.MediaWrapper>
      </>
    );
  } else if (props.type == "meeting_url") {
    const callOngoing = true;
    let callStatus: string, callDescription: string;
    let joinBtn;

    if (callOngoing) {
      callStatus = "The Zoom Call has Started";
      callDescription = `Click Join to join in on the discussion. Can't make it? Don't worry,
      a VOD will show up here afterwards.`;
      joinBtn = (
        <a target="_blank" rel="noreferrer" href={props.link}>
          <Button
            style={{ backgroundColor: "#00109B", fontWeight: "bold" }}
            size="lg"
            block
          >
            Join Now
          </Button>
        </a>
      );
    } else {
      callStatus = "The Zoom Call will start at 10:30AM";
      callDescription = `Stay tuned for the meeting by clicking on the 'Mark me interested' button! Can't make it? Don't worry,
      a VOD will show up here afterwards.`;
      joinBtn = <></>;
    }
    return (
      <>
        <UI.MeetingWrapper>
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <h3>{callStatus}</h3>
                    {callDescription}
                  </Col>
                </Row>
              </Col>
              <Col lg={3} md={5}>
                {joinBtn}
              </Col>
            </Row>
          </Container>
        </UI.MeetingWrapper>
      </>
    );
  } else {
    return <></>;
  }
};
