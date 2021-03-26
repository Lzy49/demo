const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  // mode:'development', // 开启调试模式
  entry: { // 入口起点
    index:'./src/index.js',
  },
  output: { // 输出这些决定如何输入
    filename: '[name].[contenthash].js',  // 此选项决定了每个输出 bundle 的名称, 对于单个入口起点，filename 会是一个静态名称。(最后打包出一个文件这个文件的名字)
    path: path.resolve(__dirname, 'dist'), // output 目录对应一个绝对路径。
    clean:true
  },
  devServer: {
    contentBase: './dist',
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'async-validator'
    })
  ]
};