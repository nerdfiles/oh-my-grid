/**
 * @module interfaces/http/utils/create-action
 */
const path = require('path');


module.exports = function createControllerRoutes (controllerUri) {
  const controllerPath = path.resolve('src/inter/http/actions', controllerUri);
  const Controller = require(controllerPath);

  return Controller();
};

// EOF
