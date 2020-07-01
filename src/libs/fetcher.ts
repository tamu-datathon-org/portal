// Need a package that can dynamically switch between the JS `fetch`
// and the `node-fetch` based on usage.
import fetch from "isomorphic-unfetch";
import { IncomingMessage } from "http";

export async function fetcher<JSON = unknown>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      accept: "application/json",
    },
  });
  return res.json();
}

type AuthenticatedRequest = IncomingMessage & {
  cookies: { accessToken: string };
};

export const authenticatedFetch = <JSON = unknown>(
  input: RequestInfo,
  req: AuthenticatedRequest,
  init?: RequestInit
): Promise<JSON> => {
  const { accessToken } = req.cookies;
  return fetcher(input, {
    ...init,
    headers: {
      ...init?.headers,
      Cookie: `accessToken=${accessToken}`,
    },
  });
};

export const getBaseUrl = (req: IncomingMessage): string => {
  const httpProto = req.headers["x-forwarded-proto"] || "https";
  return `${httpProto}://${req.headers.host}`;
};
