import React from "react";
import { useRouter } from "next/router";

const Activity = () => {
  const router = useRouter();

  console.log('the query should be an onject that contains the variables in the url')
  console.log('query:', router.query);

  return (
    <>
    <div>the variable activity id should appear here but it's not</div>
    <div>activity_id: {router.query.activity}</div>
    </>
  )
};

export default Activity;
