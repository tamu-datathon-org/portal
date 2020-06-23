import yaml from "js-yaml";
import fs from "graceful-fs";
import * as path from "path";
import { Request, Response } from "express";

export default async function handler<JSON = unknown>(
  req: Request,
  res: Response
): Promise<JSON> {
  const files = await fs.promises.readdir("db/pages/");
  const arr = [];
  files.forEach((file) => {
    if (path.extname(file).toLowerCase() === ".yaml") {
      arr.push(yaml.safeLoad(fs.readFileSync("db/pages/" + file, "utf8")));
    }
  });
  return res.status(200).json(arr);
}
