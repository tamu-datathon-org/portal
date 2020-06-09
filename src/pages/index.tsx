/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container } from "react-bootstrap";
import Head from "next/head";
import styled from "styled-components";

const CustomHeader = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

/**
 * This page appears on root
 */
const IndexPage = (): React.ReactNode => (
  <>
    <Head>
      <title>This was a triumph</title>
    </Head>
    <Container className="pt-5">
      <CustomHeader>Hello Next.js 👋</CustomHeader>
      <p>
        <b>Folder structure:</b> pages go in <code>pages/</code>,
        components/hooks/etc go in <code>common/</code> in which the folder has
        an index.tsx that exports all the child components like this:{" "}
        <code>export * from "./WhateverComponent"</code>
      </p>
      <p>
        For component files don't use default export (only use default export
        for page files)
      </p>
    </Container>
  </>
);

export default IndexPage;
