import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";

import { Head } from "../../common/Head";
import { Navbar } from "../../common/Navbar";
import { BackBtn } from "../../common/BackBtn";
import { Media } from "../../common/Media";
import { ActivityInfo, SocialInfo } from "../../common/ActivityInfo";
import { getActivityByName, getAllActivities } from "../../libs/activitiesAPI";

interface PageInterface {
  mediaLink: string;
  mediaType: "embed_url" | "meeting_url";
  name: string;
  content: string;
  startTime: Date;
  id: string;
  endTime: Date;
  presenter: string;
  presenterAbout: string;
  presenterSocials: SocialInfo[];
  slackChannel?: string;
  slackChannelLink?: string;
  relatedActivities: string[];
  thumbnail: string;
}

interface ActivityProps {
  page: PageInterface;
}

// This works but a little janky for now.
// https://www.w3resource.com/javascript-exercises/javascript-string-exercise-35.php
// https://stackoverflow.com/questions/1418050/string-strip-for-javascript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function stripHtmlTags(str: any) {
  if (str === null || str === "") return false;
  else str = str.toString();
  // strip HTML & whitespace
  return str.replace(/<[^>]*>/g, "").replace(/^\s+|\s+$/g, "");
}

const ActivityPage: React.FC<ActivityProps> = ({ page }: ActivityProps) => {
  // add an ellipsis if longer than 100 characters
  const desc = stripHtmlTags(page.content);
  const trimDesc = desc.length > 100 ? `${desc.substring(0, 100)}...` : desc;
  const pageURL = `https://tamudatathon.com/events/activities/${page.id}`;

  return (
    <>
      <Head title={`${page.name} - TAMU Datathon`}>
        <meta property="og:title" content={page.name} />
        <meta property="og:description" content={trimDesc} />
        <meta property="og:image" content={page.thumbnail} />
        <meta property="og:url" content={pageURL} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <BackBtn url={"/"}></BackBtn>
      <Media
        link={`/events/api/join.ts?activityId=${page.id}`}
        type={page.mediaType}
        callOngoing={
          new Date().getTime() >= new Date(page.startTime).getTime() &&
          new Date().getTime() <= new Date(page.endTime).getTime()
        }
      ></Media>
      <br />
      <ActivityInfo
        title={page.name}
        id={page.id}
        description={page.content}
        startTime={new Date(page.startTime)}
        endTime={new Date(page.endTime)}
        speakerName={page.presenter}
        speakerAbout={page.presenterAbout}
        speakerSocials={page.presenterSocials}
        relatedActivities={page.relatedActivities}
        slackChannel={page.slackChannel}
        slackChannelLink={page.slackChannelLink}
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
