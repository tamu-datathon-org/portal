import { IncomingMessage, ServerResponse } from "http";
import { User, GatekeeperRequestError } from "../common/UserProvider";
import { fetcher, getBaseUrl, authenticatedFetch } from "./fetcher";

type Request = IncomingMessage & { cookies: { accessToken: string } };

type AuthenticatedRouteHandler = (
  req: IncomingMessage & any,
  res: ServerResponse & any,
  user: User
) => any;

export const authenticatedRoute = (
  handler: AuthenticatedRouteHandler
) => async (req: Request, res: ServerResponse): Promise<any> => {
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
