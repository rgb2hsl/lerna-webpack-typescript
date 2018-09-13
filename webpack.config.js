const path = require("path");

module.exports = {
  entry: "./index.ts",
  output: {
    "filename": "[name].js",
    "path": path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};