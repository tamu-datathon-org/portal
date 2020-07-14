import { NowResponse, NowRequest } from "@vercel/node";
import { User, GatekeeperRequestError } from "../common/UserProvider";
import { getBaseUrl, authenticatedFetch } from "./fetcher";

type AuthenticatedRouteHandler = (
  req: NowRequest,
  res: NowResponse,
  user: User
) => void;

export const authenticatedRoute = (
  handler: AuthenticatedRouteHandler
) => async (req: NowRequest, res: NowResponse): Promise<void> => {
  const response: User | GatekeeperRequestError = await authenticatedFetch(
    `${getBaseUrl(req)}/auth/user`,
    req
  );

  if ((response as GatekeeperRequestError).statusCode === 401)
    return res
      .writeHead(302, {
        Location: `/auth/login?r=${req.url}`,
      })
      .end();

  return handler(req, res, response as User);
};
