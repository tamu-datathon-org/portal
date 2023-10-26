import { VercelRequest, VercelResponse } from "@vercel/node";
import { getAllActivities } from "../../../libs/activitiesAPI";

/**
 * Return JSON of all activities in /db/activities
 */
const allPages = async (req: VercelRequest, res: VercelResponse): Promise<void> => {
    try {
        const allPages = await getAllActivities();
        res.status(200).json(allPages);
      } catch (error) {
        console.error("Error in allPages:", error);
        res.status(502).json({ error: "Internal Server Error" });
      }
};

export default allPages;
