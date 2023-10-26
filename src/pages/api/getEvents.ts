import { VercelRequest, VercelResponse } from "@vercel/node";
import { authenticatedRoute } from "../../libs/middleware";
import { User } from "../../common/UserProvider";
import { getFirestoreDB } from "../../libs/firestoreDB";

/**
 * Returns a list of all database entries containing
 * the current user's userAuthId.
 */
const getEventsHandler = async (
  req: VercelRequest,
  res: VercelResponse,
  user: User
): Promise<void> => {
    try {
        const db = getFirestoreDB();
    
        const events: Object[] = [];
        const snapshot = await db.collection('ScheduledEvents').where('userAuthId', '==', user.authId).get();
        snapshot.forEach(doc => {
          events.push(doc.data());
        });
    
        res.status(200).json({ events: events });
      } catch (error) {
        console.error('Error in getEventsHandler:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
};

export default authenticatedRoute(getEventsHandler);
