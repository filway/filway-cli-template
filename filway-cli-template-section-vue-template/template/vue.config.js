const FilwayCliSectionPlugin = require('filway-cli-section-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new FilwayCliSectionPlugin()
    ]
  }
}