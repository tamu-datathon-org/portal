import { getAllPages } from "../../../libs/pagesAPI";
import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import { Container } from "react-bootstrap";

// TODO: Replace this with the right things!
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page: React.FC = ({ page }: any) => {
  return (
    <Container>
      <pre>{JSON.stringify(page, null, 4)}</pre>
    </Container>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async () => {
  const page = await getAllPages();
  return {
    props: {
      page,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getAllPages();
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
