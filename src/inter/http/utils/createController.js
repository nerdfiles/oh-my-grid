/**
 * @name createController
 * @module interfaces/http/utils
 */
const path = require('path');


module.exports = function createControllerRoutes (controllerUri) {
  const controllerPath = path.resolve('src/inter/http/modules', controllerUri);
  const Controller = require(controllerPath);

  return Controller();
};

// EOF
