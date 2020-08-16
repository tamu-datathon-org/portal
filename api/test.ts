import { NowRequest, NowResponse } from "@vercel/node";

const testEventHandler = async (
  req: NowRequest,
  res: NowResponse
): Promise<void> => {
    res.send("hello world");
};

export default testEventHandler;
