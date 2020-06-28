import React from "react";
import { useRouter } from "next/router";

const TabView: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  return <h1>Hello {JSON.stringify(router.query)}</h1>;
};
export default TabView;
