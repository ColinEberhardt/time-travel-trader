var path = require('path')
var webpack = require('webpack')
var PolyfillsPlugin = require('webpack-polyfills-plugin')

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new PolyfillsPlugin([
       'Object/assign',
       'Array/prototype/includes'
    ])
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }],
    preLoaders: [
      {
        test: /\.js?$/,
        loaders: ['eslint'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
}
