const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  mode: 'development',
  watch: true,
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      { test: /\.tsx/i, use: 'ts-loader' },
      { test: /.\css/i, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'voice assisted ',
      template: './public/index.html'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.css', '.js', '.jsx']
  }
}
