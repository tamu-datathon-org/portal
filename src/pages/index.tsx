import React from "react";
import { GetStaticProps } from "next";

import TabPage from "./[tabId]";
import { getAllPages, Page } from "../libs/pagesAPI";
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
export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const tabs = await getAllPages();
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
