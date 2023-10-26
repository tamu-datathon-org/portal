/*eslint-disable*/
import { VercelRequest, VercelResponse } from "@vercel/node";
import { authenticatedRoute } from "../../libs/middleware";
import { User } from "../../common/UserProvider";
import { getFirestoreDB } from "../../libs/firestoreDB";
import md5 from "md5";

/**
 * Adds a document of the form:
 *  { 
 *     eventId: "[EVENT-ID-HERE]",
 *     userAuthId: "users-id-from-user-object"
 *  } 
 * to the 'ScheduledEvents' collection of the database.
 * The ID of this doc is a hash of the content,
 * ensuring uniqueness and allowing easy lookup. 
 */
const addEventHandler = async (
  req: VercelRequest,
  res: VercelResponse,
  user: User
): Promise<void> => {
  const db = getFirestoreDB();
  await db.collection('ScheduledEvents').doc(md5(req.query.eventId+user.authId)).set({
    eventId: req.query.eventId as string,
    userAuthId: user.authId,
  });

  res.status(201).send("Added Event");
};

export default authenticatedRoute(addEventHandler);
