const Merge = require('webpack-merge');
const webpack = require('webpack');
const CommonConfig = require('./webpack.base.js');

module.exports = Merge(CommonConfig, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})