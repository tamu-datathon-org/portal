import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const activityDirectory = join(process.cwd(), "db/activities");

/**
 * @returns names of files in activityDirectory path
 */
export function getActivityNames(): string[] {
  return fs.readdirSync(activityDirectory);
}

export interface Activity {
  name: string;
  id: string;
  startTime: Date;
  endTime: Date;
  mediaType: string;
  mediaLink: string;
  thumbnail: string;
  presenter: string;
  priority: number;
  relatedActivities: string[];
  content: string;
}

/**
 * Returns contents of an activity file in activityDirectory as JSON
 * @param page ID of the activity (filename without .md)
 */
export function getActivityByName(page: string): Activity {
  const realPage = page.replace(/\.md$/, "");
  const fullPath = join(activityDirectory, `${realPage}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, content } as Activity;
}

/**
 * @returns list of contents of the activitiy files in the activityDirectory path
 */
export function getAllActivities(): Activity[] {
  const activityNames = getActivityNames();
  const pages = activityNames.map((page) => getActivityByName(page));
  return pages;
}
