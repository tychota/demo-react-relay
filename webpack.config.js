'use strict';

const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: './app.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js'
  }
};
