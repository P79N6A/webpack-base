const config = require("./webpack.common");

const static = require("./base-configuration");

config
  .mode("production")
  .devtool("source-map");
config.output.path(static.OUTPUT_PATH).filename(static.FILENAME);
