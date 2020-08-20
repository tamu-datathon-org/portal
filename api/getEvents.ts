import { NowRequest, NowResponse } from "@vercel/node";
import { authenticatedRoute } from "../src/libs/middleware";
import { User } from "../src/common/UserProvider";
import { getFirestoreDB } from "../src/libs/firestoreDB";

/**
 * Returns a list of all database entries containing
 * the current user's userAuthId.
 */
const getEventsHandler = async (
  req: NowRequest,
  res: NowResponse,
  user: User
): Promise<void> => {
  const db = getFirestoreDB();

  const events: Object[] = [];
  const snapshot = await db.collection('ScheduledEvents').where('userAuthId', '==', user.authId).get();
  snapshot.forEach(doc => {
    events.push(doc.data());
  });

  res.status(200).json({events: events});
};

export default authenticatedRoute(getEventsHandler);
