
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "development", 

  resolve: {

      modules: ["node_modules", "src"],
   
    fallback: {
      "util": require.resolve("util/"),
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "constants": false,
      "os": false,
      "querystring": false,
      "vm": false,

      "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
    } 

  },


  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/template.html", // Specify your HTML template file
        title: 'To-Do List',
    }),
   
],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
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
            use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
  ],
     },

 
};