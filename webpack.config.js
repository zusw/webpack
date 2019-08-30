const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
// plugin 可以在webpack运行到某个时刻的时候，帮助做一些事情
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', // 开发环境推荐该参数
  // 生产环境推荐 'cheap-module-source-map', 同时 optimization 配置不需要
  entry: { // 可以配置多个入口，出口设为[name].js
    bundle: './src/index.js',
    // sub: './src/index.js',
  },
  devServer: {
    contentBase: './dist',
    open: true,
    port: 1111,
    hot: true,
    hotOnly: true
    // proxy: { // 跨域配置
    //   '/api': 'http://localhost:3000'
    // }
  },
  module: {
    rules: [
      {
        test: /\.(eot|ttf|svg|woff)$/,
        use: {
          loader: 'file-loader',
          options:{
            // placeholder 占位符
            name: '[path][name].[ext]', // path为图片文件所在目录
            // outputPath: 'images/'
          }
        },
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[path][name].[ext]', // 文件太大的时候加载很慢
            // outputPath: 'minImg/',
            limit: 2048,
          }
        },
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader', 
            options: { 
              importLoaders: 2, // 在编译后的css文件中再遇到less文件时，引入前面两个loader
              // modules: true, // 样式模块化，仅在引入页有效
            }
          },
          {
            loader: 'less-loader',
            options: {
              paths: [path.resolve(__dirname, 'node_modules')],
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader', 
            options: { 
              importLoaders: 1, // 在编译后的css文件中再遇到less文件时，引入前面两个loader
              // modules: true, // 样式模块化，仅在引入页有效
            }
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除在外
        loader: "babel-loader",
      }
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'webpack4',
    }), // js打包完成后自动生成html模板，并把打包好的js引入
    new CleanWebpackPlugin(), // 清除上一次的打包数据
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    usedExports: true,
  },
  output: {
    publicPath: '/', // 给打包输出的html里引入的js添加域名
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  }
}