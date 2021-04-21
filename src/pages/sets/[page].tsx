import { getSetByName, getAllSets } from "../../libs/setsAPI";
import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import { Container } from "react-bootstrap";

//TODO: Replace this with the correct stuff!
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page: React.FC = ({ pageContent }: any) => {
  return (
    <Container>
      <pre>{JSON.stringify(pageContent, null, 4)}</pre>
    </Container>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const setName = (params ? params.page : "") as string;
  const pageContent = await getSetByName(setName);
  return {
    props: {
      pageContent,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const sets = await getAllSets();
  return {
    paths: sets.map((set) => ({
      params: {
        page: set.id,
      },
    })),
    fallback: false,
  };
};
