/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === "production";
// for those who using CDN
// Use the CDN in production and localhost for development.

const options = {
  buildId: "00189",
  dev: true,
  isServer: true,
  nextRuntime: "nodejs",
  defaultLoaders: { babel: "babel-loader" },
  assetPrefix: isProd ? "https://www.arman.to" : "",
};

module.exports = {
  /* config options here */
  webpack: (config, { dev }) => {
    config.output.publicPath = `${options.assetPrefix}${config.output.publicPath}`;
    if (!dev) {
      config.devtool = "source-map";
    }
    return config;
  },
};
