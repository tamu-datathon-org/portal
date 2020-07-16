import React from "react";
import { Navbar } from "../../common/Navbar";
import { BackBtn } from "../../common/BackBtn";
import { Media } from "../../common/Media";
import { ActivityInfo, SocialInfo } from "../../common/ActivityInfo";
import { getActivityByName, getAllActivities } from "../../libs/activitiesAPI";
import { GetStaticProps, GetStaticPaths } from "next";

// eslint-disable-next-line @typescript-eslint/no-explicit-any

interface PageInterface {
  mediaLink: string;
  mediaType: "embed_url" | "meeting_url";
  name: string;
  content: string;
  startTime: Date;
  endTime: Date;
  presenter: string;
  presenterAbout: string;
  presenterSocials: SocialInfo[];
  relatedActivities: string[];
}

interface ActivityProps {
  page: PageInterface;
}

const ActivityPage: React.FC<ActivityProps> = ({ page }: ActivityProps) => {
  return (
    <>
      <Navbar></Navbar>
      <BackBtn url={"/"}></BackBtn>
      <Media
        link={page.mediaLink}
        type={page.mediaType}
        callOngoing={
          new Date().getTime() >= new Date(page.startTime).getTime() &&
          new Date().getTime() <= new Date(page.endTime).getTime()
        }
      ></Media>
      <br />
      <ActivityInfo
        title={page.name}
        description={page.content}
        startTime={new Date(page.startTime)}
        endTime={new Date(page.endTime)}
        speakerName={page.presenter}
        speakerAbout={page.presenterAbout}
        speakerSocials={page.presenterSocials}
        relatedActivities={page.relatedActivities}
      ></ActivityInfo>
    </>
  );
};

export default ActivityPage;

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
