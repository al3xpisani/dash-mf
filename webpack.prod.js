const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  entry: "./container/dist/main.js",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",

      exposes: {
        "./MarketingApp": "./marketing/src/bootstrap",
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
