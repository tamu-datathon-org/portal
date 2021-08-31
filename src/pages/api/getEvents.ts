import { NowRequest, NowResponse } from "@vercel/node";
import { authenticatedRoute } from "../../libs/middleware";
import { User } from "../../common/UserProvider";
import { getFirestoreDB } from "../../libs/firestoreDB";

interface dbEvents {
  userAuthId: string;
  eventId: string;
}

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

  const events: dbEvents[] = [];
  const snapshot = await db
    .collection("ScheduledEvents")
    .where("userAuthId", "==", user.authId)
    .get();
  snapshot.forEach((doc) => {
    events.push(doc.data() as dbEvents);
  });

  res.status(200).json({ events: events });
};

export default authenticatedRoute(getEventsHandler);
