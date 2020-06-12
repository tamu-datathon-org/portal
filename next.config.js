const path = require("path"); // eslint-disable-line @typescript-eslint/no-var-requires

const BASE_PATHNAME = "events";

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname)],
  },
  assetPrefix: BASE_PATHNAME ? `/${BASE_PATHNAME}` : "",
  publicRuntimeConfig: {
    basePath: BASE_PATHNAME ? `/${BASE_PATHNAME}` : "",
  },
};
