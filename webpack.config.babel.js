var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var SOURCE_DIR = path.resolve(__dirname + '/src');

module.exports = function({ prod } = {}) {
  return {
    devtool: 'source-map',

    entry: {
      app: [].concat(
        prod ? [] : `webpack-dev-server/client?/`,
        prod ? [] : 'webpack/hot/only-dev-server',
        'regenerator-runtime/runtime',
        './src/app/client.js'
      )
    },

    output: {
      publicPath: '/',
      path: path.resolve(__dirname, '/build'),
      filename: '[name].js'
    },

    plugins: [].concat(
      !prod ? [] : new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        sourceMap: true
      }),
      prod ? [] : new webpack.NamedModulesPlugin(),
      prod ? [] : new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: !prod ? '"development"' : '"production"'
        }
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
      })
    ),

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
              'transform-decorators-legacy',
              'dynamic-import-webpack'
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
}
