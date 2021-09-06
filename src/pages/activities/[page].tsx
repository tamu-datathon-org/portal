import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";

import { Head } from "../../common/Head";
import { Navbar } from "../../common/Navbar";
import { BackBtn } from "../../common/BackBtn";
import { Media, CallStatus } from "../../common/Media";
import { ActivityInfo, ActivityInfoProps } from "../../common/ActivityInfo";
import { getActivityByName, getAllActivities } from "../../libs/activitiesAPI";
// import { useActiveUser } from "../../common/UserProvider";
import { Footer } from "../../common/Footer";
import { genEndTime } from "../../libs/utils";

// This works but a little janky for now.
// https://www.w3resource.com/javascript-exercises/javascript-string-exercise-35.php
// https://stackoverflow.com/questions/1418050/string-strip-for-javascript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function stripHtmlTags(str: any) {
  if (!str || str === null || str === "") return false;
  else str = str.toString();
  // strip HTML & whitespace
  return str.replace(/<[^>]*>/g, "").replace(/^\s+|\s+$/g, "");
}

const ActivityPage: React.FC<ActivityInfoProps> = ({
  ...ActivityInfoProps
}) => {
  // add an ellipsis if longer than 100 characters
  const desc = stripHtmlTags(ActivityInfoProps.content);
  // const user = useActiveUser();
  const trimDesc = desc.length > 100 ? `${desc.substring(0, 100)}...` : desc;
  const pageURL = `https://tamudatathon.com/events/activities/${ActivityInfoProps.id}`;

  let callStatus = CallStatus.NOT_STARTED;
  const startTimeDate = new Date(ActivityInfoProps.startTime);
  const endTime = genEndTime(startTimeDate, ActivityInfoProps.duration);
  if (
    new Date().getTime() >= startTimeDate.getTime() - 900000 &&
    new Date().getTime() <= endTime.getTime()
  ) {
    callStatus = CallStatus.ONGOING;
  }
  if (new Date().getTime() > endTime.getTime()) {
    callStatus = CallStatus.FINISHED;
  }
  return (
    <>
      <Head title={`${ActivityInfoProps.name} - TAMU Datathon`}>
        <meta property="og:title" content={ActivityInfoProps.name} />
        <meta property="og:description" content={trimDesc} />
        <meta property="og:image" content={ActivityInfoProps.thumbnail} />
        <meta property="og:url" content={pageURL} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <BackBtn url={"/"}></BackBtn>
      <Media
        link={
          ActivityInfoProps.mediaType === "meeting_url"
            ? `/events/api/join.ts?activityId=${ActivityInfoProps.id}`
            : ActivityInfoProps.mediaLink
        }
        type={ActivityInfoProps.mediaType}
        callStatus={callStatus}
      ></Media>
      <br />
      <ActivityInfo {...ActivityInfoProps}></ActivityInfo>
      <Footer />
    </>
  );
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
