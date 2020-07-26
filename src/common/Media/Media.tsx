import React from "react";
import * as UI from "./style";
import { Col, Row, Container, Button } from "react-bootstrap";
import { useActiveUser, UserCurrentStatus } from "../UserProvider";

export enum CallStatus {
  NOT_STARTED = "Not Started",
  ONGOING = "Ongoing",
  FINISHED = "Finished",
}

export interface MediaProps {
  type: "embed_url" | "meeting_url";
  link: string;
  callStatus?: CallStatus;
}

export const Media: React.FC<MediaProps> = (props: MediaProps) => {
  const { status } = useActiveUser();
  if (props.type === "embed_url") {
    return (
      <>
        <UI.MediaWrapper>
          <iframe
            width="100%"
            height="100%"
            src={props.link}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </UI.MediaWrapper>
      </>
    );
  } else {
    let callStatus: React.ReactElement | undefined,
      callDescription: React.ReactElement;
    let joinBtn;
    let recordingDisclaimer = (
      <>
        <UI.RecordingDisclaimer>
          <strong>By joining the call, you agree to being recorded.</strong>
        </UI.RecordingDisclaimer>
      </>
    );

    if (props.callStatus == CallStatus.NOT_STARTED) {
      callDescription = (
        <div>
          Come back here later to join this meeting. Can&apos;t make it?
          Don&apos;t worry, the recording will show up here afterwards.
          <br />
          {status === UserCurrentStatus.LoggedOut && (
            <b>
              Heads Up! You&apos;ll need an account to join the meeting. Click
              &quot;Login/Signup&quot; in the top navbar to make one if you
              haven&apos;t already.
            </b>
          )}
        </div>
      );
      joinBtn = <></>;
    } else if (props.callStatus == CallStatus.ONGOING) {
      callStatus = <>The meeting has started</>;
      callDescription = (
        <>
          Click Join to join in on the discussion. Can&apos;t make it?
          Don&apos;t worry, a recording will show up here afterwards.
        </>
      );
      joinBtn = (
        <Col lg={4} md={12} className="d-flex align-items-center">
          <a
            target="_blank"
            rel="noreferrer"
            href={props.link}
            style={{ width: "100%" }}
          >
            <Button
              style={{ backgroundColor: "#00109B", fontWeight: "bold" }}
              size="lg"
              className="py-lg-3 my-3"
              block
            >
              Join Now
            </Button>
          </a>
        </Col>
      );
    } else {
      callDescription = (
        <div>
          This meeting has ended. We&apos;ll be posting the recording for it
          soon, come back later to check it out!
        </div>
      );
      recordingDisclaimer = <></>;
    }

    return (
      <>
        <UI.MeetingWrapper>
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col>
                    {callStatus && <h3>{callStatus}</h3>}
                    {callDescription}
                    {recordingDisclaimer}
                  </Col>
                </Row>
              </Col>
              {joinBtn}
            </Row>
          </Container>
        </UI.MeetingWrapper>
      </>
    );
  }
};
