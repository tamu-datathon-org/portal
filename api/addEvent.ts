import { NowRequest, NowResponse } from "@vercel/node";
import { authenticatedRoute } from "../src/libs/middleware";
import { User } from "../src/common/UserProvider";
import { Firestore } from "@google-cloud/firestore";

const addEventHandler = async (
  req: NowRequest,
  res: NowResponse,
  user: User
): Promise<void> => {
  const FIRESTORE_CREDENTIALS = JSON.parse(process.env.FIRESTORE_CREDENTIALS!);
  const db = new Firestore({
    projectId: FIRESTORE_CREDENTIALS.project_id,
    credentials: FIRESTORE_CREDENTIALS,
  });
  await db.collection('ScheduledEvents').add({
    eventId: req.query.eventId as string,
    userAuthId: user.authId,
  });

  res.send("hello world");
};

export default authenticatedRoute(addEventHandler);
