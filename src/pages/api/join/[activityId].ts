import { IncomingMessage, ServerResponse } from "http";

const joinEventHandler = async (
  req: IncomingMessage & { query: { activityId: string } },
  res: ServerResponse
): Promise<void> => {
  const { activityId } = req.query;
  res.end(`Activity: ${activityId}`);
};

export default joinEventHandler;
