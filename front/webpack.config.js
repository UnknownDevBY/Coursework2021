const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');


module.exports = [{
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: ['@babel/polyfill', './index.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: getFilename('js')
  },
  plugins: [
    new Dotenv({path: process.env.ENV_FILENAME}),
    new HTMLWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: isProd()
      },
      excludeChunks: ["server.js"]
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: getFilename('css')
    })
  ],
  optimization: getOptimization(),
  resolve: {
    extensions: ['.js', '.jsx', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelPresetOptions()
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelPresetOptions('@babel/preset-react')
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          'css-loader'
        ]
      }
    ]
  }
}, {
  target: "node",
  context: path.resolve(__dirname, 'src'),
  entry: {
    server: './server.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: getFilename('js')
  },
  plugins: [
    new Dotenv({path: process.env.ENV_FILENAME}),
    new CleanWebpackPlugin()
  ]
}];

function isProd() {
  return process.env.NODE_ENV === "production"
}

function getFilename(ext) {
  return isProd() ? `[name].${ext}` : `[name].[contenthash].${ext}`;
}

function babelPresetOptions(...presets) {
  const options = {
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties']
  };
  if(presets) {
    options.presets.push(...presets);
  }
  return options;
}

function getOptimization() {
  const config = {
    splitChunks: {
      chunks: "all"
    }
  };
  if(!isProd()) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      }),
      new TerserWebpackPlugin()
    ]
  }
  return config;
}
