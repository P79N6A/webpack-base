// 需要保持@babel/env是第一个元素
// babel.legacy中通过 presets[0][1]修改target
const presets = [
  [
    '@babel/env',
    {
      useBuiltIns: 'usage',
      corejs: '2',
      modules: false,
      debug: false,
    },
  ],
  ['@babel/preset-typescript'],
  ['@babel/preset-react', { development: true }],
]

const plugins = [
  '@babel/plugin-syntax-dynamic-import',
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-export-namespace-from',
  [
    '@babel/plugin-transform-runtime',
    {
      corejs: false,
      helpers: true,
      regenerator: true,
      useESModules: false, // 不编译为commonjs
    },
  ],
  [
    'styled-jsx/babel',
    {
      sourceMaps: 'development' === process.env.NODE_ENV,
      vendorPrefixes: true,
    },
  ],
]

module.exports = {
  presets,
  plugins,
  babelrc: false,
}
