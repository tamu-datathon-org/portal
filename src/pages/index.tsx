/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container } from "react-bootstrap";
import Head from "next/head";

// custom components
import { Set } from "../common/Set";
import { Navbar } from "../common/Navbar";
import { useActiveUser, UserCurrentStatus } from "../common/UserProvider";
import { set2Info } from "../libs";
import {
  CustomHeader,
  EventsBlueWrapper,
  ColorSpan,
  NavPillsContainer,
  NavPills,
  NavItem,
} from "../common/Misc";

/**
 * This page appears on root
 */
const IndexPage = (): React.ReactNode => {
  const { user, status } = useActiveUser();

  return (
    <>
      <Head>
        <title>Events - TAMU Datathon</title>
      </Head>
      <Navbar></Navbar>
      <Container className="pt-5">
        <CustomHeader>
          <ColorSpan>Events and Workshops</ColorSpan>
        </CustomHeader>
      </Container>

      <NavPillsContainer>
        <NavPills>
          <NavItem href="/events">Everything</NavItem>
          <NavItem href="/day-1">Day 1</NavItem>
          <NavItem href="/day-2">Day 2</NavItem>
          <NavItem href="/sponsor-activities">Sponsor Activities</NavItem>
        </NavPills>
      </NavPillsContainer>

      <EventsBlueWrapper>
        <Container className="pt-5">
          <Set info={set2Info}></Set>
        </Container>
      </EventsBlueWrapper>

      <Container className="pt-5">
        <p>User Status: {status}</p>
        <p>Returned User:</p>
        <pre>{JSON.stringify(user, null, 4)}</pre>
        {status == UserCurrentStatus.LoggedOut && (
          <p>
            Looks like you are not logged in.{" "}
            <a href="/auth/login?r=/events">Click here to login</a>
          </p>
        )}
      </Container>
    </>
  );
};

export default IndexPage;
