'use strict'
var webpack = require("webpack")
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = function (_path) {
  return {
    context: _path,
    debug: false,
    devtool: 'cheap-source-map',
    output: {
      publicPath: '/',
      filename: '[name].[chunkhash].js'
    },
    plugins: [
      new CleanWebpackPlugin(['dist'], {
        root: _path,
        verbose: true,
        dry: false
      }),
      new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production') }
      })
    ]
  }
}
