import { NowRequest, NowResponse } from "@vercel/node";

module.exports = (req: NowRequest, res: NowResponse) => {
  res.json({
    hello: "world",
  });
};
