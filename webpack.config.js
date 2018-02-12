const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: ['./client/index.js', './client/App.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist',
    port: 3001,
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-3']
          }
        }]
      },
      {
        test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000,
                name: 'images/[hash]-[name].[ext]'
            } 
        }]
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "React_Express",
      template: "./client/index.html",
      filename: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {from:'client/assets/images', to:'./assets/images'} 
    ]), 
  ],
};
