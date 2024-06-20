const webpack = require('webpack');
const path = require('path');
// const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引用本地 loader 的插件
const { VueLoaderPlugin } = require('./zw-loader/index');

const config = {
  entry: './src/index.js',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.zw$/,
        // loader: 'vue-loader',
        loader: path.resolve(__dirname, './zw-loader/index.js'),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      scriptLoading: 'defer',
    }),
  ],
};

module.exports = config;
