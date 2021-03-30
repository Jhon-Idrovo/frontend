const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
/**@type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../frontend/dist"),
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      { type: "asset", test: /\.(jpg|png|gif|svg)$/i },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./static/templates/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
