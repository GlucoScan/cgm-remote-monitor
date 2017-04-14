(function () {
  'use strict';
  //for the tests window isn't the global object
  var GlucoScan = window.GlucoScan;
  var client = GlucoScan.client;
  var admin_plugins = GlcuoScan.admin_plugins;

  client.requiredPermission = '*';
  client.init(function loaded () {
    // init HTML code
    admin_plugins.createHTML( client );
  });

})();
