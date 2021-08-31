import { NowRequest, NowResponse } from "@vercel/node";
import { authenticatedRoute } from "../../libs/middleware";
import { getFirestoreDB } from "../../libs/firestoreDB";
import { User } from "../../common/UserProvider";
import md5 from "md5";

/**
 * Removes the document in the database that contains the current user's
 * userAuthId and the passed in eventId, using a hash for easy lookup.
 */
const removeEventHandler = async (
  req: NowRequest,
  res: NowResponse,
  user: User
): Promise<void> => {
  const db = getFirestoreDB();
  await db.collection('ScheduledEvents').doc(md5(req.query.eventId+user.authId)).delete();
  
  res.status(200).send("Removed Event");
};

export default authenticatedRoute(removeEventHandler);
