import { NowRequest, NowResponse } from "@vercel/node";
import { authenticatedRoute } from "../src/libs/middleware";
import { User } from "../src/common/UserProvider";
import { Firestore } from "@google-cloud/firestore";
import md5 from "md5";

const removeEventHandler = async (
  req: NowRequest,
  res: NowResponse,
  user: User
): Promise<void> => {
  const FIRESTORE_CREDENTIALS = JSON.parse(process.env.FIRESTORE_CREDENTIALS!);
  const db = new Firestore({
    projectId: FIRESTORE_CREDENTIALS.project_id,
    credentials: FIRESTORE_CREDENTIALS,
  });

  await db.collection('ScheduledEvents').doc(md5(req.query.eventId+user.authId)).delete();
  
  res.status(200).send("Deleted Event");
};

export default authenticatedRoute(removeEventHandler);
