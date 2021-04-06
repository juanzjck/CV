const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath:'/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'public/index.html'
    })
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
          plugins:['@babel/plugin-syntax-dynamic-import'],
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
      },
    }]
  }
}
