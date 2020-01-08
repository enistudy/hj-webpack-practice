const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["@babel/polyfill", "./src/js/index.js", "./src/sass/style.scss"],
  output: {
    filename: "bundle.js",
    publicPath: "dist",
    path: path.join(__dirname, "dist"),
  },
  plugins: [new MiniCssExtractPlugin({ filename: "css/style.css" })],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./",
    host: "localhost",
    hot: true,
    port: 9000,
    open: true,
  },
};
