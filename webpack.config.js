const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'Client/src');
const BUILD_DIR = path.resolve(__dirname, 'Client/Static');

module.exports = {
  entry: [
    // 'react-hot-loader/patch',
    // 'webpack-dev-server/client?http://localhost:8080/',
    // 'webpack/hot/only-dev-server',
    path.resolve(SRC_DIR, 'index.js')
  ],
  devtool: 'cheap-eval-source-map',
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
    // publicPath: '/'
  },
  // devServer: {
  //   hot: true,
  //   contentBase: 'Client/Static/',
  //   publicPath: '/',
  //   historyApiFallback: true
  // },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin()
  ],
  module: {
    loaders: [{
      loader: 'babel-loader',
      exclude: /node_modules/,
      test: /\.js$/,
      query: {
        presets: ['es2015', 'react'],
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  watch: true
};