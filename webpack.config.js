const path = require('path');                                     //node module - home directory
const HtmlWebpackPlugin = require('html-webpack-plugin');         //after installing add this
const ExtractTextPlugin = require("extract-text-webpack-plugin"); //after installing add this
const extractLess = new ExtractTextPlugin({                       //after installing add this
    filename: "styles.css",                                       //output file for styles after conversion from less
    disable: process.env.NODE_ENV === "development"
});



var BUILD_DIR = path.resolve(__dirname, './dist');
// var APP_DIR = path.resolve(__dirname, './src/js');
// var STYLE_DIR = path.resolve(__dirname, './src/less');

module.exports = {
  //context: __dirname,
  //devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/app.js",                                       //path to start of project
  output: {
    path: BUILD_DIR,
    filename: "app.min.js"                                        //minified bundle file
  },
  module: {
        rules: [
          {
              test: /\.less$/,
              use: extractLess.extract({
                  use: [{
                      loader: "css-loader"
                  }, {
                      loader: "less-loader"
                  }],
                  // use style-loader in development
                  fallback: "style-loader"
              })
          },
          {
              test: /\.(png|svg|jpe?g|gif)$/i,
              use: [
                'file-loader?name=[path][name].[ext]',             //this will keep file names and dir same in build
                'image-webpack-loader'                             //optimising images
              ]
          }
        ]
    },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TimePicker',
      // minify: {
      //   collapseWhitespace: true
      // },
      template: './src/index.ejs',                                  // Load a custom template - you need to create this file manually!
  }),
    extractLess
  ],
};