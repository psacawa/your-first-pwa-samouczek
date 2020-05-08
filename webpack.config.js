const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    app: "./src/app.ts",
    sw: "./src/sw.ts",
    install: "./src/install.ts",
    // worker: "./src/worker/index.ts"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin(["public"])
  ],
  devtool: "inline-source-map",
  devServer: {
    writeToDisk: true,
    // port: 8000
  }
};
