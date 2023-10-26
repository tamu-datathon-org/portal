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
import { genEndTime } from "../../libs/utils";

export interface SocialInfo {
  type: string;
  link: string;
}

export interface ActivityInfoProps {
  name: string;
  id: string;
  eventId: string;
  startTime: string;
  duration: number;
  mediaType: "embed_url" | "meeting_url" | "embed_url_require_auth";
  mediaLink: string;
  thumbnail: string;
  presenter: string;
  presenterAbout: string;
  presenterSocials: SocialInfo[];
  slackChannel?: string;
  slackChannelLink?: string;
  priority: number;
  relatedActivities?: string[];
  tabs: string;
  content: string;
}

/**
 * Returns string in Day HH:MM(AM/PM) format.
 * @param time a date object
 */
export const formatTime = (time: Date, endTime: Date): string => {
  return (
    moment(time).tz(moment.tz.guess()).format("dddd MMM Do, h:mma ") +
    " to " +
    moment(endTime).tz(moment.tz.guess()).format("h:mma") +
    ` (${moment(time).tz(moment.tz.guess()).format("z")})`
  );
};

/**
 * Returns string in YYYYMMDDTHHmmSS/YYYYMMDDTHHmmSS format.
 * @param startTime a date object
 * @param endTime a date object
 */
export const formatGoogleTime = (startTime: Date, endTime: Date): string => {
  return (
    moment(startTime).tz("America/Chicago").format("YYYYMMDDTHHmmSS") +
    "/" +
    moment(endTime).tz("America/Chicago").format("YYYYMMDDTHHmmSS")
  );
};

export const ActivityInfo: React.FC<ActivityInfoProps> = (
  props: ActivityInfoProps
) => {
  // const [interested, setInterested] = useState(false);
  const { user } = useActiveUser();
  const curTime = new Date();

  // check if using forestry.io or previous year's format
  const momentTest = moment(props.startTime, "YYYY-MM-DD hh:mm A");
  const startTime = momentTest.isValid()
    ? momentTest.toDate()
    : new Date(props.startTime);
  const endTime = genEndTime(startTime, props.duration);
  const minsToEvent = startTime.getTime() - curTime.getTime();

  // const handleClick = () => {
  //   setInterested(!interested);
  //   /**
  //    * TODO: Add activity to list of activities user is interested in during the session.
  //    */
  // };

  /**
   * Creates and downloads an iCalendar file with the current activity's information.
   */
  const getICS = React.useCallback(() => {
    const startTimeString = moment(props.startTime)
      .tz(moment.tz.guess())
      .format("YYYY-MM-DD-HH-mm");
    const startTimeArr = startTimeString.split("-").map(Number);
    const startTimeDate = new Date(props.startTime);
    const endTimeString = moment(genEndTime(startTimeDate, props.duration))
      .tz(moment.tz.guess())
      .format("YYYY-MM-DD-HH-mm");
    const endTimeArr = endTimeString.split("-").map(Number);
    const event = {
      start: startTimeArr as ics.DateArray,
      end: endTimeArr as ics.DateArray,
      title: props.name,
      description: `Attend Here: tamudatathon.com/events/activities/${props.id}`,
      url: `https://tamudatathon.com/events/activities/${props.id}`,
    };
    ics.createEvent(event, (error, value) => {
      if (error) {
        console.log(error);
        return;
      }
      const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
      FileSaver.saveAs(blob, "invite.ics");
    });
  }, []);

  const remindMeMenu =
    minsToEvent > 0 ? (
      <>
        <Dropdown>
          <Dropdown.Toggle
            id="add-to-calendar"
            style={{ width: "100%" }}
            variant={"outline-primary"}
          >
            Add to calendar
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ width: "100%" }}>
            <Dropdown.Item
              target="_blank"
              href={
                `https://www.google.com/calendar/render?` +
                `action=TEMPLATE&` +
                `text=${props.name}&` +
                `dates=${formatGoogleTime(startTime, endTime)}&` +
                `details=Attend Here: tamudatathon.com/events/activities/${props.id}&` +
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
      </>
    ) : (
      <></>
    );

  const channelLink = props.slackChannel ? (
    <>
      <br />
      Check out this discord channel for discussions on this event:
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
        <h2 className="pb-3">{props.name}</h2>
        <Row>
          <Col className="min-vh-100 mb-5">
            <ReactMarkdown
              className="activity-content"
              linkTarget="_blank"
              escapeHtml={false}
              source={props.content}
            />
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
            {remindMeMenu}
            <Card>
              <Card.Body>
                <Card.Title>When:</Card.Title>
                <Card.Text>{formatTime(startTime, endTime)}</Card.Text>
                <Card.Title>Presented By:</Card.Title>
                <Card.Text>{props.presenter}</Card.Text>
                <Card.Title>About the Speaker(s):</Card.Title>
                <Card.Text style={{ marginTop: "0.75rem" }}>
                  {props.presenterAbout}
                </Card.Text>
                <ul>
                  {props.presenterSocials &&
                    props.presenterSocials.map((social: SocialInfo) => (
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
                  Join our Discord community and talk with TD organizers and
                  like minded DS/ML enthusiasts!
                  <br />
                  {channelLink}
                </Card.Text>
                <Button
                  href={"https://tamudatathon.com/discord"}
                  variant={"outline-primary"}
                  block
                >
                  Join our Discord!
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
