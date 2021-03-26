
var webpack = require('webpack');
module.exports = {
  entry: {
    index: "./src/index.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      SOMETHINE: JSON.stringify('This is something we needed.')
    })
  ]
};