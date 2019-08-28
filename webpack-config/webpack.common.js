const Config = require("webpack-chain");
// const HappyPack = require('happypack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const static = require("./base-configuration");

const config = new Config();

Object.keys(static.ENTRY).forEach(name =>
  config.entry(name).add(static.ENTRY[name])
);

/** rule */
/** js */
config.module
  .rule('js')
    .test(/\.(jsx?|tsx?)$/)
    .exclude
      .add(/node_modules/)
      .end()
    .use('babel')
      .loader('babel-loader')
      // loader('happypack/loader?id=babel')
      .options({
        ...require('./babel-options')
      })

/** style */
config.module
  .rule('css')
    .test(/\.(c|le)ss$/)
    .use('style')
      .loader('style-loader')
      .end()
    .use('css')
      .loader('css-loader')
      .end()
    .use('less')
      .loader('less-loader')

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
    title: static.TITLE,
    template: './public/index.html',
    filename: './index.html',
    inject: true,
    hash: true,
    meta: static.META,
    minify: { collapseWhitespace: true },
    showErrors: true,
    xhtml: true,
  }])

/** plugin */

// config
//   .plugin('happy')
//     .use(HappyPack, [{
//       id: 'css',
//       loader: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
//     }])


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
