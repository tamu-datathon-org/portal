import React from "react";
import TabPage from "./[tabId]";
import { GetStaticProps } from "next";
import { getAllPages, Page } from "../libs/pagesAPI";
import PropTypes from "prop-types";
import { ActivitySection } from "../common/Set/interfaces";
import { getPageSets, getPageSetsContent } from "../libs/setsAPI";

/**
 * Root page (which is essentially the TabPage for the first tab)
 */
const IndexPage: React.FC<{
  page?: Page;
  allPages?: Page[];
  allSets?: ActivitySection[];
}> = ({ page, allPages, allSets }) => {
  return <TabPage page={page} allPages={allPages} allSets={allSets}></TabPage>;
};
IndexPage.propTypes = {
  page: PropTypes.any,
  allPages: PropTypes.arrayOf(PropTypes.any),
  allSets: PropTypes.arrayOf(PropTypes.any),
};
export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const tabs = (await getAllPages()).sort(
    (a, b) => (a.priority || -1) - (b.priority || -1)
  );
  const tabSets = await getPageSets(tabs[0].id);
  const allSets = await getPageSetsContent(tabSets);

  return {
    props: {
      page: tabs.length > 0 ? tabs[0] : undefined,
      allPages: tabs,
      allSets: allSets,
    },
  };
};
