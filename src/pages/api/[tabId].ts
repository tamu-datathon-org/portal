import yaml from "js-yaml";
import fs from "graceful-fs";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler<JSON = unknown>(
  { query: { tabId } }: NextApiRequest,
  res: NextApiResponse
): void {
  const file = "db/pages/" + tabId + ".yaml";
  let str = "[]";
  if (fs.existsSync(file)) {
    str = yaml.safeLoad(fs.readFileSync(file, "utf8")).sets;
  }
  return res.status(200).json(str);
}
