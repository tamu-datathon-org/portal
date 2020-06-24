import matter from "gray-matter";
import fs from "graceful-fs";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler<JSON = unknown>(
  { query: { activityId } }: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const file = "public/db/activities/" + activityId + ".md";
  let str;
  if (!fs.existsSync(file)) {
    str = "{}";
  } else {
    const fileContent = await fs.promises.readFile(file, "utf8");
    str = matter(fileContent);
  }
  return res.status(200).json(str);
}
