// 需要保持@babel/env是第一个元素
// babel.legacy中通过 presets[0][1]修改target
const presets = [
  '@babel/preset-env'
]

const plugins = [
  ['@babel/plugin-transform-runtime']
]

module.exports = {
  presets,
  plugins,
  babelrc: false,
}