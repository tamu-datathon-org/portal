import yaml from "js-yaml";
import fs from "graceful-fs";
import * as path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler<JSON = unknown>(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const files = await fs.promises.readdir("db/pages/");
  const arr: Array<string> = [];
  for (const file of files) {
    if (path.extname(file).toLowerCase() === ".yaml") {
      const fileContent = await fs.promises.readFile(
        "db/pages/" + file,
        "utf8"
      );
      arr.push(yaml.safeLoad(fileContent));
    }
  }
  return res.status(200).json(arr);
}
