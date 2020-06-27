import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const activityDirectory = join(process.cwd(), "db/activities");

export function getActivityNames() {
  return fs.readdirSync(activityDirectory);
}

export function getActivityByName(page: string) {
  const realPage = page.replace(/\.md$/, "");
  const fullPath = join(activityDirectory, `${realPage}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { data, content };
}

export function getAllActivities() {
  const activityNames = getActivityNames();
  const pages = activityNames.map((page) => getActivityByName(page));
  return pages;
}
