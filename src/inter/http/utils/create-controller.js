/**
 * @name create-controller
 * @module interfaces/http/utils
 */
const path = require('path');


module.exports = function createControllerRoutes (controllerUri) {
  const controllerPath = path.resolve('src/inter/http/resources', controllerUri);
  console.log(controllerPath);
  const Controller = require(controllerPath);

  return Controller();
};

// EOF
