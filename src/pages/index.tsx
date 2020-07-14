import React from "react";
import TabPage from "./[tabId]";
import { GetStaticProps } from "next";
import { getAllPages, Page } from "../libs/pagesAPI";
import PropTypes from "prop-types";

/**
 * Root page (which is essentially the TabPage for the first tab)
 */
const IndexPage: React.FC<{ page?: Page; allPages?: Page[] }> = ({
  page,
  allPages,
}) => {
  return <TabPage page={page} allPages={allPages}></TabPage>;
};
IndexPage.propTypes = {
  page: PropTypes.any,
  allPages: PropTypes.arrayOf(PropTypes.any),
};
export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const tabs = await getAllPages();

  return {
    props: {
      page: tabs.length > 0 ? tabs[0] : undefined,
      allPages: tabs,
    },
  };
};
