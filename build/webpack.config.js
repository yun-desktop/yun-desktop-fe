const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const packagesPath = path.resolve('./packages')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'js/[name].bundle.js',
    path: packagesPath
  },
  devServer: {
    contentBase: packagesPath,
    compress: true,
    port: 8012
  },
  module: {
    rules: [
      /** Vue-Loader */
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      /** Style-Loader */
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      path: path.resolve('./'),
      filename: 'index.html',
      title: 'Yun-Desktop',
      template: path.resolve('./src/assets/html/enter.html')
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    })
  ]
}