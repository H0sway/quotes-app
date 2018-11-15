// Import dependencies
const path = require('path');
// Handles css files
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
// Spits out an index.html file in the build
const HtmlWebPackPlugin = require('html-webpack-plugin');

// Configure webpack
const config = {
  // Entry point will be in the src folder, file will be named index.js
  entry: './src/index.js',
  // Send the files to the build folder, create one if it isn't present
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js',
    },
  module: {
    rules: [
      {
        // For .js or .jsx files use babel-loader. Exclude node modules
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        // for .css files use css-loader. If that doesn't work use style-loader
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: 'css-loader'
          })
      }
    ]
  },
  plugins: [
    // Take the index.html file as a template and create a new one in the build folder
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    }),
    // Name the css file sent to the build folder style.css
    new ExtractTextPlugin({filename: 'style.css'})
  ]
};

// export the config onbject
module.exports = config;
