import React from "react";
import { GetStaticProps } from "next";
import { getAllActivities } from "../../libs/activitiesAPI";
import PropTypes from "prop-types";
import { ActivityInfoProps } from "../../common/ActivityInfo";

/**
 * Return JSON of all activities in /db/activities
 */
const IndexPage: React.FC<{
  allPages?: ActivityInfoProps[];
}> = ({ allPages }) => {
  return <pre>{JSON.stringify(allPages, null, 4)}</pre>;
};
IndexPage.propTypes = {
  allPages: PropTypes.arrayOf(PropTypes.any),
};
export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const allPages = await getAllActivities();

  return {
    props: {
      allPages
    },
  };
};
