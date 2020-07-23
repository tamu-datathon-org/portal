/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

// custom components
import { Head } from "../common/Head";
import { Navbar } from "../common/Navbar";
import { Set } from "../common/Set";
import { ActivitySection } from "../common/Set/interfaces";
import {
  CustomHeader,
  EventsBlueWrapper,
  ColorSpan,
  NavPillsContainer,
  NavPills,
  NavItem,
} from "../common/Misc";

import { getAllPages, getPageByName, Page } from "../libs/pagesAPI";
import { getPageSets, getPageSetsContent } from "../libs/setsAPI";

interface IndexPageProps {
  page?: Page;
  allPages?: Page[];
  allSets?: ActivitySection[];
}

/**
 * This page is for any of the tabs on the main page
 */
const TabPage: React.FC<IndexPageProps> = ({ page, allPages, allSets }) => {
  // const { user, status } = useActiveUser();

  return (
    <>
      <Head />
      <Navbar />
      <Container className="pt-5">
        <CustomHeader>
          <ColorSpan>Events and Workshops</ColorSpan>
        </CustomHeader>
      </Container>

      <NavPillsContainer>
        <NavPills activeKey={`/${page?.id}`}>
          {allPages?.map((p) => (
            <NavItem href="/[tabId]" as={`/${p.id}`} key={p.id}>
              {p.name}
            </NavItem>
          ))}
        </NavPills>
      </NavPillsContainer>

      <EventsBlueWrapper>
        {allSets?.map((p, index) => (
          <Container
            className="pt-4"
            key={p.sectionTitle + "_" + p.eventList.length + "_" + index}
          >
            <Set info={p}></Set>
          </Container>
        ))}
      </EventsBlueWrapper>
    </>
  );
};

TabPage.propTypes = {
  page: PropTypes.any,
  allPages: PropTypes.arrayOf(PropTypes.any),
  allSets: PropTypes.arrayOf(PropTypes.any),
};

export default TabPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tabId = (params ? params.tabId : "") as string;

  // get info on this tab
  const page = await getPageByName(tabId);

  // get all tabs
  const allPages = await getAllPages();

  // all the sets in this tab
  const tabSets = await getPageSets(tabId);

  // all the content of each set in this tab
  const allSets = await getPageSetsContent(tabSets);

  return {
    props: {
      page,
      allPages,
      allSets,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tabs = await getAllPages();

  return {
    paths: tabs.map((tab) => ({
      params: {
        tabId: tab.id,
      },
    })),
    fallback: false,
  };
};
