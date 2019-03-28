const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: __dirname+'/src/client/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ],
  },
  output: {
    path: __dirname + '/public',
    filename: 'app.js',
  }
};