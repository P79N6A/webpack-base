const webpack = require('webpack')

const config = require("./webpack.common");
const static = require('./base-configuration')

config
  .mode("development")
  .devtool("cheap-module-eval-source-map");

config
  .devServer
    /** 压缩 */
    .compress(true)
    .headers(static.HEADERS)
    .host(static.HOST || 'localhost')
    .hot(true)
    .hotOnly(true)
    .https(static.HTTPS)
    .inline(true)
    .open(static.OPEN)
    .port(static.PORT)
    .progress(true)
    .proxy(static.PROXY)
    .stats(static.STATS || 'minimal')

config
  .plugin('hot')
    .use(webpack.HotModuleReplacementPlugin)



console.log(config.toConfig());

module.exports = config.toConfig();
