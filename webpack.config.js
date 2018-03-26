import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin';
const Dotenv = require('dotenv-webpack');

export default {
  entry: [
    './app/web/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
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
    new webpack.DefinePlugin({
      'process.env': {
        TEST: 'test',
      },
    }),
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: 'dist/index.html'
    }),
    new LiveReloadPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};

