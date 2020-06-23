import yaml from "js-yaml";
import fs from "graceful-fs";
import { Response } from "express";

export default function handler<JSON = unknown>(
  { query: { tabId } }: JSON,
  res: Response
): Promise<JSON> {
  const file = "db/pages/" + tabId + ".yaml";
  let str = "[]";
  if (fs.existsSync(file)) {
    str = yaml.safeLoad(fs.readFileSync(file, "utf8")).sets;
  }
  return res.status(200).json(str);
}
