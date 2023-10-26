import { VercelRequest, VercelResponse } from "@vercel/node";
import { getActivityByName } from "../../../libs/activitiesAPI";

/**
 * Return JSON of a specififc activity from /db/activities/{name_of_activity}
 */
const activity = async (req: VercelRequest, res: VercelResponse): Promise<void> => {
  const { page } = req.query;
  const activity = await getActivityByName(String(page));
  res.status(200).json(activity);
};

export default activity;
