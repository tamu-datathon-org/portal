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
      accept: "application/json",
      ...init?.headers,
    },
  });
  return res.json();
}

export const getBaseUrl = (req: IncomingMessage) => {
  const httpProto = req.headers["x-forwarded-proto"] || "https";
  return `${httpProto}://${req.headers.host}`;
};
