import React from "react";
import * as UI from "./style";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";

export interface InfoProps {
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  speakerName: string;
  speakerAbout: string;
  speakerLinkedIn: string;
  speakerSocials: any;
  relatedActivities?: string[];
}

export const formatTime = (time: Date, endTime: Date): string => {
  /**
   * returns string in Day HH:MM(AM/PM) format
   * @param time a date object
   */
  return (
    moment(time).format("dddd h:mma") + " to " + moment(endTime).format("h:mma")
  );
};

export const ActivityInfo: React.FC<InfoProps> = (props: InfoProps) => {
  return (
    <>
      <UI.InfoContainer>
        <h2>{props.title}</h2>
        <br />
        <Row>
          <Col>
            <p>{props.description}</p>
          </Col>
          <Col lg={3} md={5}>
            <UI.Button>🤔 Mark me interested</UI.Button>
            <Card>
              <Card.Body>
                <Card.Title>When:</Card.Title>
                <Card.Text>
                  {formatTime(props.startTime, props.endTime)}
                </Card.Text>
                <Card.Title>Presented By:</Card.Title>
                <Card.Text>{props.speakerName}</Card.Text>
                <Card.Title>About the Speaker:</Card.Title>
                {props.speakerSocials.map((social: any) => (
                  <Card.Link key={social.type} href={social.link}>
                    {social.type}
                  </Card.Link>
                ))}
                <Card.Text>{props.speakerAbout}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </UI.InfoContainer>
    </>
  );
};
