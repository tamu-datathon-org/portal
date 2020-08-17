import { NowRequest, NowResponse } from "@vercel/node";
import { authenticatedRoute } from "../src/libs/middleware";
import { User } from "../src/common/UserProvider";
import { Firestore } from "@google-cloud/firestore";

const getEventsHandler = async (
  req: NowRequest,
  res: NowResponse,
  user: User
): Promise<void> => {
  const FIRESTORE_CREDENTIALS = JSON.parse(process.env.FIRESTORE_CREDENTIALS!);
  const db = new Firestore({
    projectId: FIRESTORE_CREDENTIALS.project_id,
    credentials: FIRESTORE_CREDENTIALS,
  });

  const events: Object[] = [];
  const snapshot = await db.collection('ScheduledEvents').where('userAuthId', '==', user.authId).get();
  snapshot.forEach(doc => {
    events.push(doc.data());
  });

  res.status(200).json({events: events});
};

export default authenticatedRoute(getEventsHandler);
