import { getActivityByName, getAllActivities } from "../../../libs";
import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import { Container } from "react-bootstrap";

// TODO: Replace Component with a proper one!
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page: React.FC = ({ page }: any) => {
  return (
    <Container>
      <pre>{JSON.stringify(page, null, 4)}</pre>
    </Container>
  );
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
  const pages = await getAllActivities();

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
