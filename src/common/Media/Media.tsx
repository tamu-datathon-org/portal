import React from "react";
import * as UI from "./style";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface MediaProps {
  type: "embed_url" | "join_url";
  link: string;
}

export const Media: React.FC<MediaProps> = (props: MediaProps) => {
  if (props.type === "embed_url") {
    return (
      <>
        <UI.MediaContainer>
          <Row>
            <iframe
              width="800"
              height="450"
              src={props.link}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Row>
        </UI.MediaContainer>
      </>
    );
  } else if (props.type == "join_url") {
    const callOngoing = true;
    let callStatus: string, callDescription: string;
    let joinBtn;

    if (callOngoing) {
      callStatus = "The Zoom Call has Started";
      callDescription = `Click Join to join in on the discussion. Can't make it? Don't worry,
      a VOD will show up here afterwards.`;
      joinBtn = (
        <UI.Button href={props.link}>
          <UI.BtnText>Join Now</UI.BtnText>
        </UI.Button>
      );
    } else {
      callStatus = "The Zoom Call will start at 10:30AM";
      callDescription = `Stay tuned for the meeting by clicking on the 'Mark me interested' button! Can't make it? Don't worry,
      a VOD will show up here afterwards.`;
      joinBtn = <></>;
    }
    return (
      <>
        <UI.ZoomContainer>
          <h3>{callStatus}</h3>
          <Row>
            <Col>{callDescription}</Col>
            <Col lg={3} md={5}>
              {joinBtn}
            </Col>
          </Row>
        </UI.ZoomContainer>
      </>
    );
  } else {
    return <></>;
  }
};
