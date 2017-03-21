const path = require('path');

module.exports = {
  entry: {
    //vendor: ['scrollmagic'],
    bundle: ['babel-polyfill', './src/app.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets'),
    publicPath: "/assets",
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ],
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
};