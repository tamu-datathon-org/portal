import fs from "fs";
import { join } from "path";
import yaml from "js-yaml";

const pageDirectory = join(process.cwd(), "db/pages");

/**
 * @returns {Promise<string[]>} names of files in pageDirectory path
 */
export async function getPageNames(): Promise<string[]> {
  return fs.promises.readdir(pageDirectory);
}

export interface Page {
  name: string;
  id: string;
  orderedBy: "alphabetical" | "priority" | "start_time" | "none" | "";
  sets: string[];
}

/**
 * Returns contents of a page file in pageDirectory as JSON
 * @param {string} pageName Name of the page (filename without .yaml)
 * @returns {Promise<Page>}
 */
export async function getPageByName(pageName: string): Promise<Page> {
  const realPage = pageName.replace(/\.yaml$/, "");
  const fullPath = join(pageDirectory, `${realPage}.yaml`);
  const fileContents = await fs.promises.readFile(fullPath, "utf8");
  const data = yaml.safeLoad(fileContents);

  return data as Page;
}

/**
 * @returns {Promise<Page[]>} list of contents of the page files in pageDirectory
 */
export async function getAllPages(): Promise<Page[]> {
  const pageNames = await getPageNames();
  const pages = pageNames.map((page) => getPageByName(page));
  return Promise.all(pages);
}
