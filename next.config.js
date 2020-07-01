const path = require("path"); // eslint-disable-line @typescript-eslint/no-var-requires

const BASE_PATHNAME = "events";

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname)],
  },
  experimental: {
    rewrites() {
      return [
        // TODO: test out basePath to replace below rewrites
        {
          source: "/events/_next/:path*",
          destination: "/_next/:path*",
        },
        {
          source: "/events/_next/webpack-hmr:path*",
          destination: "/_next/webpack-hmr:path*",
        },
        {
          source: "/events/static/:path*",
          destination: "/static/:path*",
        },
        {
          source: "/events/api/:path*",
          destination: "/api/:path*",
        },
      ];
    },
  },
  assetPrefix: BASE_PATHNAME ? `/${BASE_PATHNAME}` : "",
};
