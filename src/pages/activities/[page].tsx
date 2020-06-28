import { getActivityByName, getAllActivities } from "../../libs/activitiesAPI";
import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";

const Page: React.FC = ({ page }: any) => {
  return <pre>{JSON.stringify(page)}</pre>;
};

export default Page;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const activityName = (params ? params.page : "") as string;
  const page = await getActivityByName(activityName);
  return {
    props: {
      page,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = getAllActivities();

  return {
    paths: pages.map((pages) => {
      return {
        params: {
          page: pages.id,
        },
      };
    }),
    fallback: false,
  };
};
