const webpack = require('webpack')

const config = require("./webpack.common");
const static = require("./base-configuration");

config
  .mode("production")
  .devtool("source-map");

config.output
  .path(static.OUTPUT_PATH)
  .filename(static.FILENAME);

config
  .plugin('hash')
    .use(webpack.HashedModuleIdsPlugin, [{
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 4
    }])