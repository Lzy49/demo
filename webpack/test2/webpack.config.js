const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    path:path.resolve(__dirname,'dist'),
    filename:'webpack-number.js',
    library:'webpackNumber', // 暴露出去的变量名称 当 用 script 方式引入时使用
    libraryTarget: "umd",
  },
  devtool: 'inline-source-map', // 配置调试代码 混合在一起
  externals:{
    lodash:{
      commonjs:'lodash',
      commonjs2:'lodash',
      amd:'lodash',
      root:'_'
    }
  }
}