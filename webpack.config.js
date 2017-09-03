const path = require('path')

const slsw = require('serverless-webpack')
const MinifyPlugin = require('babel-minify-webpack-plugin')

module.exports = {
  // TODO: Remove Object.values() when
  // https://github.com/elastic-coders/serverless-webpack/issues/210 is resolved
  entry: slsw.lib.entries,
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  plugins: [
    new MinifyPlugin(),
  ],
}
