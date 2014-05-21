/**
 * Entry-point of the application. Configures RequireJS and bootstraps the main application file.
 */
(function () {
  'use strict';

  /**
   * Configure RequireJS.
   * @see http://requirejs.org/docs/api.html#config
   */
  require.config({
    baseUrl: 'lib', // Modules are loaded from 'lib' by default
    paths: {
      app: '../app' // 'app' is a shortcut for '../app'
    }
  });

  /**
   * Bootstrap the main module.
   * @see http://requirejs.org/docs/api.html#define for ways to define a module
   */
  // TODO: enable this after implementing the main module:
  // require(['app/main']);

})();
