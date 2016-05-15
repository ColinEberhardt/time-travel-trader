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
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },
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
      test: /\.ts(x?)$/,
      loaders: ['react-hot', 'ts-loader'],
      include: path.join(__dirname, 'src')
    }]
  }
}
