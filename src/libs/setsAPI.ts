import fs from "fs";
import { join } from "path";
import yaml from "js-yaml";
import { getPageByName } from "./pagesAPI";
import { ActivitySection } from "../common/Set/interfaces";
import { Activity, ActivityCardProps } from "../common/Card/interfaces";
import { getActivityByName } from "../libs/activitiesAPI";

const setDirectory = join(process.cwd(), "db/sets");

/**
 * @returns {Promise<string[]>} names of files in setDirectory path
 */
export async function getSetNames(): Promise<string[]> {
  return fs.promises.readdir(setDirectory);
}

export interface Set {
  name: string;
  id: string;
  description: string;
  showMoreState: boolean;
  orderBy: "alphabetical" | "priority" | "start_time" | "none" | "" | undefined;
  filterBy: "happening_now" | undefined;
  priority: number;
  activityList: string[];
}

/**
 * Returns contents of a set file in setDirectory as JSON
 * @param {string} set ID of the set (filename without .yaml)
 * @returns {Promise<Set>}
 */
export async function getSetByName(setName: string): Promise<Set> {
  const realSet = setName.replace(/\.yaml$/, "");
  const fullPath = join(setDirectory, `${realSet}.yaml`);
  const fileContents = await fs.promises.readFile(fullPath, "utf8");
  const data = yaml.safeLoad(fileContents);

  return data as Set;
}

/**
 * @returns {Promise<Set[]>} list of contents of the set files in setDirectory
 */
export async function getAllSets(): Promise<Set[]> {
  const setNames = await getSetNames();
  const sets = setNames.map((set) => getSetByName(set));
  return Promise.all(sets);
}

/**
 * @param {string} pageName Name of the page you want the sets for.
 * @returns {Promise<Set[]>} list of contents of the sets listed in the page yaml
 */
export async function getPageSets(pageName: string): Promise<Set[]> {
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
  tabSets: Set[]
): Promise<ActivitySection[]> {
  const allSets = await Promise.all(
    tabSets.map(async (set) => {
      const activities: Array<ActivityCardProps> = await Promise.all(
        set.activityList.map(async (activity) => {
          const activityFileContent = await getActivityByName(activity);
          const activityContent: Activity = {
            imgUrl: activityFileContent.thumbnail,
            title: activityFileContent.name,
            startTime: activityFileContent.startTime,
            endTime: activityFileContent.endTime,
            duration: activityFileContent.duration,
            infoUrl: `/events/activities/${activityFileContent.id}`,
          };
          return { event: activityContent };
        })
      );
      const setObject: ActivitySection = {
        eventList: activities,
        sectionTitle: set.name,
        sectionDescription: set.description,
        orderedBy: set.orderBy || "",
        filteredBy: set.filterBy || "",
        defaultShowMoreState: set.showMoreState,
      };
      return setObject;
    })
  );
  return allSets;
}
