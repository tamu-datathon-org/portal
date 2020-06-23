import * as matter from "gray-matter";
import fs from "graceful-fs";
import { Response } from "express";

export default function handler<JSON = unknown>(
  { query: { activityId } }: JSON,
  res: Response
): Promise<JSON> {
  const file = "db/activities/" + activityId + ".md";
  let str = "{}";
  if (fs.existsSync(file)) {
    str = matter(fs.readFileSync(file, "utf8"));
  }
  return res.status(200).json(str);
}
