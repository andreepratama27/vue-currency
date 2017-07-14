const path = require('path')
const webpack = require('webpack')

module.exports = {

  entry: path.resolve('src/main.js'),

  output: {
    path: path.resolve('build'),
    filename: 'vue-currency.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'css-loader!sass-loader'
      }
    ]
  }
}