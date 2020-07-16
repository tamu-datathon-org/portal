import React from "react";
import { useState } from "react";
import { Card, Row, Col, Container, Button, Alert } from "react-bootstrap";
import moment from "moment-timezone";
import ReactMarkdown from "react-markdown";
import { useActiveUser } from "../UserProvider";

export interface SocialInfo {
  type: string;
  link: string;
}

export interface InfoProps {
  title: string;
  id: string;
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
    moment(time).tz("America/Chicago", true).format("dddd MMM Do, h:mma ") +
    " to " +
    moment(endTime).tz("America/Chicago", true).format("h:mma") +
    ` (${moment(time).tz("America/Chicago", true).format("z")})`
  );
};

export const ActivityInfo: React.FC<InfoProps> = (props: InfoProps) => {
  const [interested, setInterested] = useState(false);
  const { user } = useActiveUser();

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
            <ReactMarkdown escapeHtml={false} source={props.description} />
          </Col>
          <Col lg={4} md={12}>
            {/* <Button
              onClick={handleClick}
              variant={interested ? "outline-secondary" : "outline-primary"}
              block
            >
              {interested
                ? "🙄 I'm no longer interested"
                : "🤔 Mark me interested"}
            </Button> */}
            <Card>
              <Card.Body>
                <Card.Title>When:</Card.Title>
                <Card.Text>
                  {formatTime(props.startTime, props.endTime)}
                </Card.Text>
                <Card.Title>Presented By:</Card.Title>
                <Card.Text>{props.speakerName}</Card.Text>
                <Card.Title>About the Speaker(s):</Card.Title>
                <Card.Text style={{ marginTop: "0.75rem" }}>
                  {props.speakerAbout}
                </Card.Text>
                <ul>
                  {props.speakerSocials.map((social: SocialInfo) => (
                    <li key={social.type + "_" + social.link}>
                      <Card.Link href={social.link}>{social.type}</Card.Link>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
            {user?.isAdmin && (
              <Alert variant="light" className="mt-3">
                <b>Hey Psst! ✨</b>
                <br />
                Looks like you&apos;re an admin! If the information here looks
                like it could be better please edit the markdown (and send a PR)
                below by clicking the button below.
                <Button
                  variant="light"
                  block
                  className="mt-2"
                  href={`https://github.com/tamu-datathon-org/portal/blob/master/db/activities/${props.id}.md`}
                >
                  ✏️ Edit This Page
                </Button>
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
