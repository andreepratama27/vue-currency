const path = require('path')
const webpack = require('webpack')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {

  entry: path.resolve('src/main.js'),

  devServer: {
     port: 1000,
     inline: true
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
      }
    ]
  },

  plugins: [
    new htmlPlugin({
      template: path.resolve('index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
