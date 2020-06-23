import matter from "gray-matter";
import fs from "graceful-fs";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler<JSON = unknown>(
  { query: { activityId } }: NextApiRequest,
  res: NextApiResponse
): void {
  const file = "db/activities/" + activityId + ".md";
  let str;
  if (!fs.existsSync(file)) {
    str = "{}";
  } else {
    str = matter(fs.readFileSync(file, "utf8"));
  }
  return res.status(200).json(str);
}
