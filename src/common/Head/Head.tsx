import React from "react";
import PropTypes from "prop-types";
import NextHead from "next/head";

import { HeadProps } from "./interfaces";

/**
 * Head component
 */
export const Head: React.FC<HeadProps> = ({ children, title }) => {
  const resTitle = (title && title.length !== 0) ? title : "Events - TAMU Datathon";
  return (
    <NextHead>
      <title>{resTitle}</title>
      <link rel="icon" type="image/png" href="/static/img/favicon.ico" />
      {children}
    </NextHead>
  );
};
