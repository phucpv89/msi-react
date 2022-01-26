const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
// const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash:8].js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  experiments: {
    syncWebAssembly: true,
  },
  externals: [
    // nodeExternals()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      }, 
    ],
  },
};
