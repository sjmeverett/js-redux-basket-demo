const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',

  entry: [
    './src/lib/components/app'
  ],

  devtool: 'sourcemap',

  output: {
    path: path.join(__dirname, '/dist/public'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader',
          options: {
            precision: 10
          }
        }])
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract([{
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }])
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.scss', '.css']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/lib/components/index.html',
      inject: 'body'
    }),

    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ],

  cache: true
};
