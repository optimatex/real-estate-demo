const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  mode: 'development',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader?sourceMap',
          },
          {
            loader:
              'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, '../src')],
            },
          },
        ],
      },
    ],
  },
};
