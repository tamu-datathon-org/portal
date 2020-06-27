import { getActivityByName, getAllActivities } from "../../libs/activitiesAPI";

const Page = (page: JSON) => {
  return JSON.stringify(page);
};

export default Page;

type Params = {
  params: {
    page: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const page = await getActivityByName(params.page);
  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  const pages = getAllActivities();

  return {
    paths: pages.map((pages) => {
      return {
        params: {
          page: pages.data.id,
        },
      };
    }),
    fallback: false,
  };
}
