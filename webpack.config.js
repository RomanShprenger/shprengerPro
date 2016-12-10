var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: './app/main.ts',
    libraries: './app/libraries.ts',
    polyfill: './app/polyfill.ts',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: 'style-loader!css-loader!autoprefixer?browsers=last2 versions'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader')
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  ]

};