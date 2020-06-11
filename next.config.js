const path = require("path"); // eslint-disable-line @typescript-eslint/no-var-requires
// for custom styles in SASS
const withSass = require('@zeit/next-sass');

const BASE_PATHNAME = "events";

module.exports = withSass({
  sassOptions: {
    includePaths: [path.join(__dirname)],
  },
  assetPrefix: BASE_PATHNAME ? `/${BASE_PATHNAME}` : "",
  publicRuntimeConfig: {
    basePath: BASE_PATHNAME ? `/${BASE_PATHNAME}` : "",
  },
});
