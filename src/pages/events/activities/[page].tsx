import React from "react";
import { Navbar } from "../../../common/Navbar";
import { BackBtn } from "../../../common/BackBtn";
import { Media } from "../../../common/Media";
import { ActivityInfo } from "../../../common/ActivityInfo";
import {
  getActivityByName,
  getAllActivities,
} from "../../../libs/activitiesAPI";
import { GetStaticProps, GetStaticPaths } from "next";
import { Container } from "react-bootstrap";

// TODO: Replace Component with a proper one!
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page: React.FC = ({ page }: any) => {
  return (
    <>
      <Navbar></Navbar>
      <BackBtn url={"/events"}></BackBtn>
      <Media link={page.mediaLink} type={page.mediaType}></Media>
      <ActivityInfo title={page.name} description={page.content} startTime={new Date(page.startTime)} endTime={new Date(page.endTime)} speakerName={page.presenter} speakerAbout={page.presenterAbout} speakerLinkedIn={"#"} speakerSocials={page.presenterSocials} relatedActivities={page.relatedActivities}></ActivityInfo>
    </>
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
