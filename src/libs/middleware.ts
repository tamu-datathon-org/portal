import { IncomingMessage, ServerResponse } from "http";
import { User, GatekeeperRequestError } from "../common/UserProvider";
import { fetcher } from "./fetcher";

type Request = IncomingMessage & { cookies: { accessToken: string } };

export const getAuthenticatedUser = async (
  req: Request,
  res: ServerResponse
): Promise<User> => {
  const { accessToken } = req.cookies;
  const httpProto = req.headers["x-forwarded-proto"] || "https";
  const authCheckUrl = `${httpProto}://${req.headers.host}/auth/user`;
  const response: User | GatekeeperRequestError = await fetcher(authCheckUrl, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });

  if ((response as GatekeeperRequestError).statusCode === 401) {
    res
      .writeHead(302, {
        Location: `/auth/login?r=${req.url}`,
      })
      .end();
    throw new Error();
  }

  return response as User;
};
