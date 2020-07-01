import { IncomingMessage, ServerResponse } from "http";
import { User, GatekeeperRequestError } from "../common/UserProvider";
import { fetcher, getBaseUrl } from "./fetcher";

type Request = IncomingMessage & { cookies: { accessToken: string } };

type AuthenticatedRouteHandler = (
  req: IncomingMessage & any,
  res: ServerResponse & any,
  user: User
) => any;

export const authenticatedRoute = (
  handler: AuthenticatedRouteHandler
) => async (req: Request, res: ServerResponse): Promise<any> => {
  const { accessToken } = req.cookies;
  const response: User | GatekeeperRequestError = await fetcher(
    `${getBaseUrl(req)}/auth/user`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    }
  );

  if ((response as GatekeeperRequestError).statusCode === 401)
    return res
      .writeHead(302, {
        Location: `/auth/login?r=${req.url}`,
      })
      .end();

  return handler(req, res, response as User);
};
