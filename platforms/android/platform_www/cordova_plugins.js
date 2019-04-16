cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-fivestarsplugin.FiveStarsPlugin",
      "file": "plugins/cordova-plugin-fivestarsplugin/www/FiveStarsPlugin.js",
      "pluginId": "cordova-plugin-fivestarsplugin",
      "clobbers": [
        "cordova.plugins.FiveStarsPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-fivestarsplugin": "0.0.1"
  };
});