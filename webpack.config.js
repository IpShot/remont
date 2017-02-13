const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const SOURCE_DIR = path.resolve(__dirname + '/src');

module.exports = {
  devtool: 'source-map',

  entry: {
    app: [
      'webpack-dev-server/client?/',
      'webpack/hot/only-dev-server',
      'regenerator-runtime/runtime',
      './src/app/client.js'
    ]
  },

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '/build'),
    filename: '[name].js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      sourceMap: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      splitBlocks: false
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [ SOURCE_DIR ],
        exclude: [/node_modules/],
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: [
            'transform-decorators-legacy'
          ]
        }
      },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[local]--[hash:base64:6]',
          'cssnext-loader'
        ]
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname),
      path.resolve(__dirname, 'src')
    ],
  },

  devServer: {
    hot: true,
    publicPath: '/',
    inline: false,
    lazy: false,
    quiet: true,
    noInfo: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { colors: true },
    historyApiFallback: {
      disableDotRule: true
    }
  }
};
