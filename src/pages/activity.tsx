import React from "react";
import { useRouter } from "next/router";
import { Navbar } from "../common/Navbar";
import { BackBtn } from "../common/BackBtn";
import { Media } from "../common/Media";
import { ActivityInfo } from "../common/ActivityInfo";

const Activity = (): React.ReactNode => {
  const router: any = useRouter();
  // const activity_id: string = router.query.activity;
  const activity_id: string = "data_science_101";

  return (
    <>
      <Navbar></Navbar>
      <BackBtn url={"/events"}></BackBtn>
      <Media type={"youtube"} link={"https://www.youtube.com/watch?v=5qap5aO4i9A"}></Media>
      <ActivityInfo></ActivityInfo>
    </>
  );
};

export default Activity;
