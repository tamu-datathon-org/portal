/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container } from "react-bootstrap";
import Head from "next/head";
import styled from "styled-components";

// custom components
import { Set } from "../common/Set";
import { Navbar } from "../common/Navbar";
import { useActiveUser, UserCurrentStatus } from "../common/UserProvider";
import { set1Info, set2Info } from "../libs";

const CustomHeader = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

/**
 * This page appears on root
 */
const IndexPage = (): React.ReactNode => {
  const { user, status } = useActiveUser();

  return (
    <>
      <Head>
        <title>This was a triumph</title>
      </Head>
      <Navbar></Navbar>
      <Container className="pt-5">
        <CustomHeader>Events and Workshops</CustomHeader>

        <Set info={set1Info}></Set>
        <Set info={set2Info}></Set>

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
