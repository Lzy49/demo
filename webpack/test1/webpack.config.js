const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  // mode:'development', // 开启调试模式
  entry: { // 入口起点
    // index: {
    //   import: './src/index.js',
    //   dependOn: 'shared',
    // },
    // another: {
    //   import: './src/another-module.js',
    //   dependOn: 'shared',
    // },
    // shared: 'lodash',

    index:'./src/index.js',
    // another:'./src/another-module.js'
  },
  output: { // 输出这些决定如何输入
    filename: '[name].[contenthash].js',  // 此选项决定了每个输出 bundle 的名称, 对于单个入口起点，filename 会是一个静态名称。(最后打包出一个文件这个文件的名字)
    path: path.resolve(__dirname, 'dist'), // output 目录对应一个绝对路径。
    clean:true
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  module: { // 这些选项决定了如何处理项目中的不同类型的模块。
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // 表示 遇到 .css 结尾的文件先会运行 style-loader 然后又去运行 css-loader
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
    ],
  },
  // devtool: 'inline-source-map', // 选择源码地图形式
  // devServer:{
  //   contentBase: './dist',
  // },
  plugins:[
    new HtmlWebpackPlugin({
      title:'Development'
    })
  ]
};