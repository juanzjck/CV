const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const LinkTypePlugin = require('html-webpack-link-type-plugin').HtmlWebpackLinkTypePlugin;
module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath:'/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'public/index.html',
      favicon: "./public/favicon.ico"
    }),
    new LinkTypePlugin({
      '**/*.css' : 'text/css'
    }),
  ],
  stats: {
    children: false, 
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins:['@babel/plugin-syntax-dynamic-import','@babel/plugin-transform-runtime'],
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
      exclude: /node_modules/,
      use: {
        loader: 'url-loader',
      },
    },
    {
      test: /favicon\.ico$/,
      loader: 'url',
      query: { 
        limit: 1,
        name: '[name].[ext]',
      },
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-url-loader',
          options: {
            limit: 10000,
          },
        },
      ],
    },
    {
      test:  /\.font\.(js|json)$/,
      use: [
        {
          loader: 'style!css!webfonts',
          options: {
            limit: 10000,
          },
        },
      ],
    },
    {
      test:  /\.styled-components$/,
      use: [
        {
          loader: 'styled-components',
          options: {
            limit: 10000,
          },
        },
      ],
    }
  ]
  }
}
