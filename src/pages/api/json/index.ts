import { NowRequest, NowResponse } from "@vercel/node";
// import { getAllActivities } from "../../../libs/activitiesAPI";

import fs from "fs";
import matter from "gray-matter";
import { ActivityInfoProps } from "../../../common/ActivityInfo";
import { join } from "path";
const activityDirectory = join(process.cwd(), "db/activities");
export async function getActivityNames(): Promise<string[]> {
  return fs.promises.readdir(activityDirectory);
}
export async function getActivityByName(
  page: string
): Promise<ActivityInfoProps> {
  const realPage = page.replace(/\.md$/, "");
  const fullPath = join(activityDirectory, `${realPage}.md`);
  const fileContents = await fs.promises.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, content, id: realPage } as ActivityInfoProps;
}
export async function getAllActivities(): Promise<ActivityInfoProps[]> {
  const activityNames = await getActivityNames();
  const pages = activityNames.map((page) => getActivityByName(page));
  return Promise.all(pages);
}

/**
 * Return JSON of all activities in /db/activities
 */
const allPages = async (req: NowRequest, res: NowResponse): Promise<void> => {
  const allPages = await getAllActivities();
  res.status(200).json(allPages);
};

export default allPages;
