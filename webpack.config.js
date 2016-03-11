'use strict';

const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js'
  }
};
