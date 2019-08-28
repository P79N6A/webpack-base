const Config = require("webpack-chain");
const HtmlWebPackPlugin = require('html-webpack-plugin')

const static = require("./base-configuration");

const config = new Config();

Object.keys(static.ENTRY).forEach(name =>
  config.entry(name).add(static.ENTRY[name])
);

/** js */
config.module
  .rule('js')
    .test(/\.(jsx?|tsx?)$/)
    .exclude
      .add(/node_modules/)
      .end()
    .use('babel')
      .loader('babel-loader')
      .options({
        ...require('./babel-options')
      })

/** css */
config.module
  .rule('css')
    .test(/\.(c|le)ss$/)
    .exclude
      .add(/node_modules/)
      .end()
    .use('happypack')
      .loader('happypack/loader?id=css')

/** 图片 */
config.module
  .rule('image')
    .test(/\.(png|jpg|gif|svg|webp)/)
    .exclude
      .add(/node_modules/)
      .end()
    .use('url')
      .loader('url-loader')
      .options({
        limit: 8192
      })

config  
  .plugin('html')
  .use(HtmlWebPackPlugin, [{
    cache: true,
    favicon: static.FAVICON,
    inject: true,
    meta: {
      viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      "X-UA-Compatible": {
        'http-equiv': "X-UA-Compatible",
        "content": "ie=edge"
      },
      ...static.META,
    },
    minify: { collapseWhitespace: true },
    showErrors: true,
    title: static.TITLE,
    xhtml: true,
  }])

/** resolve */
/** alias */
Object.keys(static.alias).forEach(name => {
  config.resolve.alias.set(name, static.alias[name])
})

/** 用于描述的 JSON 文件 */
config.resolve
  .descriptionFiles
  .add('package.json')
  
/** 自动解析确定的扩展 */
config.resolve.extensions
  .add('.tsx')
  .add('.ts')
  .add('.js')
  .add('.json')
  .add('.jsx')

config.resolve.mainFields
  .add('jsnext:main')
  .add('browser')
  .add('main')

/** 解析目录时要使用的文件名。 */
config.resolve.mainFiles
  .add('index')

config.resolve.modules
  .add(static.MODULESPATH)
  .add('node_modules')
  
module.exports = config;
