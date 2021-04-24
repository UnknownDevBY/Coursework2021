const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: process.env.NODE_ENV,
  target: "node",
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: ['@babel/polyfill', './index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: getFilename("js")
  },
  externals: {
    'sequelize': 'require("sequelize")'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'script.sql'),
          to: path.resolve(__dirname, 'dist')
        }]
    }),
  ]
};

function getFilename(ext) {
  return isProd() ? `[name].${ext}` : `[name].[contenthash].${ext}`;
}

function isProd() {
  return process.env.NODE_ENV === "production"
}
