import React from "react";
import { useState } from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import moment from "moment";
import ReactMarkdown from "react-markdown";

export interface SocialInfo {
  type: string;
  link: string;
}

export interface InfoProps {
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  speakerName: string;
  speakerAbout: string;
  speakerSocials: SocialInfo[];
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
  const [interested, setInterested] = useState(false);

  const handleClick = () => {
    setInterested(!interested);
    /**
     * TODO: Add activity to list of activities user is interested in during the session.
     */
  };

  return (
    <>
      <Container className="my-4">
        <h2 className="pb-3">{props.title}</h2>
        <Row>
          <Col>
            <ReactMarkdown source={props.description} />
          </Col>
          <Col lg={4} md={12}>
            <Button
              onClick={handleClick}
              variant={interested ? "outline-secondary" : "outline-primary"}
              block
            >
              {interested
                ? "🙄 I'm no longer interested"
                : "🤔 Mark me interested"}
            </Button>
            <br />
            <Card>
              <Card.Body>
                <Card.Title>When:</Card.Title>
                <Card.Text>
                  {formatTime(props.startTime, props.endTime)}
                </Card.Text>
                <Card.Title>Presented By:</Card.Title>
                <Card.Text>{props.speakerName}</Card.Text>
                <Card.Title>About the Speaker:</Card.Title>
                {props.speakerSocials.map((social: SocialInfo) => (
                  <Card.Link key={social.type} href={social.link}>
                    {social.type}
                  </Card.Link>
                ))}
                <Card.Text style={{ marginTop: "0.75rem" }}>
                  {props.speakerAbout}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
