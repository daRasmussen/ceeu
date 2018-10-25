const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  output: {
    path: `${__dirname}/../build/js`,
    publicPath: '/build/js',
    filename: 'cu.js',
    libraryTarget: 'var',
    libraryExport: 'default',
    library: 'cu'
  },
  mode: 'development',
  devServer: {
    contentBase: './',
    port: 9006
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
