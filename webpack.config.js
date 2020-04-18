const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

  // webpack will take the files from ./src/index
  entry: './src/index',

  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /favicon\.ico$/,
        loader: 'url',
        query: { 
          limit: 1,
          name: '[name].[ext]',
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: "./public/favicon.ico"
    })
  ]
};