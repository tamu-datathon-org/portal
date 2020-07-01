import { IncomingMessage, ServerResponse, Server } from "http";
import { getAuthenticatedUser } from "../../../libs/middleware";

type Request = IncomingMessage & {
  query: { activityId: string };
  cookies: { accessToken: string };
};

const joinEventHandler = async (
  req: Request,
  res: ServerResponse
): Promise<void> => {
  const { activityId } = req.query;
  let user = undefined;
  try {
    user = await getAuthenticatedUser(req, res);
  } catch (e) {
    return;
  }

  console.log(user);

  res.end(`Activity: ${activityId}`);
};

export default joinEventHandler;
