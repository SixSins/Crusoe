import * as path from "path";

export default {
  entry: "./src/components/App.tsx",
  output: {
    path: path.resolve(__dirname, "dist", "public"),
    filename: "bundle.js",
    publicPath: "/public/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFileName: "webpack.tsconfig.json"
        }
      }
    ]
  }
};
