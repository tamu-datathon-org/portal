import React from "react";
// import { useState } from "react";
import {
  Card,
  Row,
  Col,
  Container,
  Button,
  Alert,
  Dropdown,
} from "react-bootstrap";
import moment from "moment-timezone";
import ReactMarkdown from "react-markdown";
import { useActiveUser } from "../UserProvider";
import * as ics from "ics";
import * as FileSaver from "file-saver";

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
  slackChannel?: string;
  slackChannelLink?: string;
  mediaLink: string;
}

export const formatTime = (time: Date, endTime: Date): string => {
  /**
   * returns string in Day HH:MM(AM/PM) format
   * @param time a date object
   */
  return (
    moment(time).tz(moment.tz.guess()).format("dddd MMM Do, h:mma ") +
    " to " +
    moment(endTime).tz(moment.tz.guess()).format("h:mma") +
    ` (${moment(time).tz(moment.tz.guess()).format("z")})`
  );
};

export const formatGoogleTime = (startTime: Date, endTime: Date): string => {
  /**
   * Returns string in YYYYMMDDTHHmmSS/YYYYMMDDTHHmmSS format.
   * @param startTime a date object
   * @param endTime a date object
   */
  return (
    moment(startTime).tz("America/Chicago").format("YYYYMMDDTHHmmSS") +
    "/" +
    moment(endTime).tz("America/Chicago").format("YYYYMMDDTHHmmSS")
  );
};

export const ActivityInfo: React.FC<InfoProps> = (props: InfoProps) => {
  // const [interested, setInterested] = useState(false);
  const { user } = useActiveUser();

  // const handleClick = () => {
  //   setInterested(!interested);
  //   /**
  //    * TODO: Add activity to list of activities user is interested in during the session.
  //    */
  // };

  const getICS = () => {
    const startTimeString = moment(props.startTime)
      .tz(moment.tz.guess())
      .format("YYYY-MM-DD-HH-mm");
    const startTimeArr = startTimeString.split("-").map(Number);
    const endTimeString = moment(props.endTime)
      .tz(moment.tz.guess())
      .format("YYYY-MM-DD-HH-mm");
    const endTimeArr = endTimeString.split("-").map(Number);
    const event = {
      start: startTimeArr as ics.DateArray,
      end: endTimeArr as ics.DateArray,
      title: props.title,
      description: "Attend Here: tamudatathon.com/events",
      url: "http://tamudatathon.com/events/",
    };
    ics.createEvent(event, (error, value) => {
      if (error) {
        console.log(error);
        return;
      }
      const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
      FileSaver.saveAs(blob, "invite.ics");
    });
  };

  const channelLink = props.slackChannel ? (
    <>
      <br />
      Check out this slack channel for discussions on this event:
      <br />
      <a href={props.slackChannelLink}>
        <b>{props.slackChannel}</b>
      </a>
    </>
  ) : (
    <></>
  );

  return (
    <>
      <Container className="mt-4 mb-5">
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
            <Dropdown>
              <Dropdown.Toggle id="add-to-calendar">
                Add to calendar
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  target="_blank"
                  href={
                    `https://www.google.com/calendar/render?` +
                    `action=TEMPLATE&` +
                    `text=${props.title}&` +
                    `dates=${formatGoogleTime(
                      props.startTime,
                      props.endTime
                    )}&` +
                    `details=Attend Here: tamudatathon.com/events&` +
                    `ctz=America/Chicago`
                  }
                >
                  Google Calendar
                </Dropdown.Item>
                <Dropdown.Item onSelect={getICS}>
                  Other Calendar (.ics file)
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <br />
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
            <br />
            <Card>
              <Card.Body>
                <Card.Title>Join the Discussion:</Card.Title>
                <Card.Text>
                  Join our slack to discuss with presenters, mentors, and other
                  TAMU Datathon 2020 attendees.
                  <br />
                  {channelLink}
                </Card.Text>
                <Button
                  href={
                    "https://join.slack.com/t/tamudatathon2020/shared_invite/zt-fnyi8tdv-Tm1ArAaznmVd9cXDaglq9Q"
                  }
                  variant={"outline-primary"}
                  block
                >
                  Join our Slack!
                </Button>
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
