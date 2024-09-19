const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); // Import webpack for DefinePlugin

module.exports = {
  mode: "development",

  resolve: {
    modules: ["node_modules", "src"],

    fallback: {
      util: require.resolve("util/"),
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: require.resolve("crypto-browserify"), // Make sure you have this installed
      constants: false,
      os: false,
      querystring: false,
      vm: false,
    },
  },

  entry: "./src/index.js",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      title: "To-Do List",
    }),

    // Define process.env to prevent "process is not defined" error
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"), // or 'production' for production build
      process: JSON.stringify({}), // Provide an empty process object
    }),
  ],

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
