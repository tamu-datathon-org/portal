import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { ActivityInfoProps } from "../common/ActivityInfo";

const activityDirectory = join(process.cwd(), "db/activities");

/**
 * @returns {Promise<string[]>} names of files in activityDirectory path
 */
export async function getActivityNames(): Promise<string[]> {
  return fs.promises.readdir(activityDirectory);
}

/**
 * Returns contents of an activity file in activityDirectory as JSON
 * @param {string} page ID of the activity (filename without .md)
 * @returns {Promise<Activity>}
 */
export async function getActivityByName(
  page: string
): Promise<ActivityInfoProps> {
  const realPage = page.replace(/\.md$/, "");
  const fullPath = join(activityDirectory, `${realPage}.md`);
  const fileContents = await fs.promises.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, content, id: realPage } as ActivityInfoProps;
}

/**
 * @returns {Promise<Activity[]>} list of contents of the activitiy files in the activityDirectory path
 */
export async function getAllActivities(): Promise<ActivityInfoProps[]> {
  const activityNames = await getActivityNames();
  const pages = activityNames.map((page) => getActivityByName(page));
  return Promise.all(pages);
}
