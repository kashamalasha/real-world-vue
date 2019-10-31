const openInEditor = require("launch-editor-middleware");

module.exports = {
  configureWebpack: {
    devServer: {
      before(app) {
	app.use("/__open-in-editor", openInEditor("sublime"));
      }
    }
  }
};

