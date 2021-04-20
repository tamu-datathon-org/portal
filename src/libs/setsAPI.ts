import fs from "fs";
import { join } from "path";
import yaml from "js-yaml";
import { getPageByName } from "./pagesAPI";
import { ActivitySection } from "../common/Set/interfaces";
import { ActivityCardProps } from "../common/Card/interfaces";
import { getActivityByName } from "../libs/activitiesAPI";

const setDirectory = join(process.cwd(), "db/sets");

/**
 * @returns {Promise<string[]>} names of files in setDirectory path
 */
export async function getSetNames(): Promise<string[]> {
  return fs.promises.readdir(setDirectory);
}

/**
 * Returns contents of a set file in setDirectory as JSON
 * @param {string} set ID of the set (filename without .yaml)
 * @returns {Promise<Set>}
 */
export async function getSetByName(setName: string): Promise<ActivitySection> {
  const realSet = setName.replace(/\.yaml$/, "");
  const fullPath = join(setDirectory, `${realSet}.yaml`);
  const fileContents = await fs.promises.readFile(fullPath, "utf8");
  const data = yaml.safeLoad(fileContents);

  return {...(data as object), id: realSet} as ActivitySection;
}

/**
 * @returns {Promise<Set[]>} list of contents of the set files in setDirectory
 */
export async function getAllSets(): Promise<ActivitySection[]> {
  const setNames = await getSetNames();
  const sets = setNames.map((set) => getSetByName(set));
  return Promise.all(sets);
}

/**
 * @param {string} pageName Name of the page you want the sets for.
 * @returns {Promise<Set[]>} list of contents of the sets listed in the page yaml
 */
export async function getPageSets(pageName: string): Promise<ActivitySection[]> {
  const pageData = await getPageByName(pageName);
  const sets = pageData.sets.map((set) => getSetByName(set));

  return Promise.all(sets);
}

/**
 * Converts page sets to the format required by the Set react component.
 * @param tabSets A list of sets to be converted to the required format.
 * @returns Promise<ActivitySection[]> Promise of a list of sets.
 */
export async function getPageSetsContent(
  tabSets: ActivitySection[]
): Promise<ActivitySection[]> {
  const allSets = await Promise.all(
    tabSets.map(async (set) => {
      const activities: Array<ActivityCardProps> = await Promise.all(
        set.activityList.map(async (activity) => {
          const activityFileContent = await getActivityByName(activity);
          return { event: activityFileContent };
        })
      );
      const setObject: ActivitySection = {
        ...set,
        activityListPopulated: activities,
      };
      return setObject;
    })
  );
  return allSets;
}
