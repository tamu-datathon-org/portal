import { IncomingMessage, ServerResponse } from "http";
import { authenticatedRoute } from "../../../libs/middleware";
import { User } from "../../../common/UserProvider";

type Request = IncomingMessage & {
  query: { activityId: string };
  cookies: { accessToken: string };
};

const joinEventHandler = async (
  req: Request,
  res: ServerResponse,
  user: User
): Promise<void> => {
  const { activityId } = req.query;

  res.end(`Activity: ${activityId}`);
};

export default authenticatedRoute(joinEventHandler);
