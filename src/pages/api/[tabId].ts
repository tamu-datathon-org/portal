import yaml from "js-yaml";
import fs from "graceful-fs";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler<JSON = unknown>(
  { query: { tabId } }: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const file = "../../../db/pages/" + tabId + ".yaml";
  let str = "[]";
  if (fs.existsSync(file)) {
    const fileContent = await fs.promises.readFile(file, "utf8");
    str = yaml.safeLoad(fileContent).sets;
  }
  return res.status(200).json(str);
}
