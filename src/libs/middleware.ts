import { VercelRequest, VercelResponse } from "@vercel/node";
import { User, GatekeeperRequestError } from "../common/UserProvider";
import { getBaseUrl, authenticatedFetch } from "./fetcher";

type AuthenticatedRouteHandler = (
  req: VercelRequest,
  res: VercelResponse,
  user: User
) => void;

export const authenticatedRoute =
  (handler: AuthenticatedRouteHandler) =>
  async (req: VercelRequest, res: VercelResponse): Promise<void> => {
    const response: User | GatekeeperRequestError = await authenticatedFetch(
      `${getBaseUrl(req)}/auth/user`,
      req
    );

    if ((response as GatekeeperRequestError).statusCode === 401) {
      res
        .writeHead(302, {
          Location: `/auth/login?r=${req.url}`,
        })
        .end();

      return Promise.resolve();
    }

    return handler(req, res, response as User);
  };
