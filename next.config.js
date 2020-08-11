const path = require("path"); // eslint-disable-line @typescript-eslint/no-var-requires

const BASE_PATHNAME = "events";

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname)],
  },
  experimental: {
    basePath: `/${BASE_PATHNAME}`,
  },
  assetPrefix: BASE_PATHNAME ? `/${BASE_PATHNAME}` : "",
};
