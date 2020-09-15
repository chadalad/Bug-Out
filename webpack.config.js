const path = require('path');

module.exports = {
  entry: path.join(__dirname, './src/client/index.jsx'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
