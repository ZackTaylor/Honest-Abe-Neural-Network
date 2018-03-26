const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './app/index.js'
  ],
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
