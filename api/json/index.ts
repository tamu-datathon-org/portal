import { NowRequest, NowResponse } from "@vercel/node";
import { getAllActivities } from "../../src/libs/activitiesAPI";

/**
 * Return JSON of all activities in /db/activities
 */
const allPages = async (req: NowRequest, res: NowResponse): Promise<void> => {
  const allPages = await getAllActivities();
  res.status(200).json(allPages);
};

export default allPages;
