import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { ActivityInfoProps } from "../../common/ActivityInfo";
import { getActivityByName, getAllActivities } from "../../libs/activitiesAPI";

/**
 * Return JSON of a specififc activity from /db/activities/{name_of_activity}
 */
const ActivityPage: React.FC<ActivityInfoProps> = ({
  ...ActivityInfoProps
}) => {
  return (<pre>{JSON.stringify({...ActivityInfoProps}, null, 4)}</pre>);
};
export default ActivityPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const activityName = (params ? params.page : "") as string;
  const activity = await getActivityByName(activityName);
  return {
    props: {
      ...activity,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getAllActivities();

  return {
    paths: pages.map((page) => ({
      params: {
        page: page.id,
      },
    })),
    fallback: false,
  };
};
