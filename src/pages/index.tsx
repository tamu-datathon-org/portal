/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container } from "react-bootstrap";
import Head from "next/head";
import styled from "styled-components";
import { useActiveUser, UserCurrentStatus } from "../common/UserProvider";

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
      <Container className="pt-5">
        <CustomHeader>Hello Next.js 👋</CustomHeader>
        <p>
          <b>Folder structure:</b> pages go in <code>pages/</code>,
          components/hooks/etc go in <code>common/</code> in which the folder
          has an index.tsx that exports all the child components like this:{" "}
          <code>export * from "./WhateverComponent"</code>
        </p>
        <p>
          For component files don't use default export (only use default export
          for page files)
        </p>
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
