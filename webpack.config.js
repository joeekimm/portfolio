const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'Client/src');
const BUILD_DIR = path.resolve(__dirname, 'Client/Static/dist');

module.exports = {
  watch: true,
  entry: [
    // 'webpack-dev-server/client?http://localhost:8080/',
    // 'webpack/hot/only-dev-server',
    path.resolve(SRC_DIR, 'index.js')
  ],
  devtool: 'cheap-eval-source-map',
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true
  },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NamedModulesPlugin()
  // ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.(gif|svg|jpg|png)$/,
      loader: "file-loader",
    }]
  },
  watch: true
};