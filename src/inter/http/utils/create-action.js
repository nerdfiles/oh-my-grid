/**
 * @module interfaces/http/utils/create-action
 * @author aha <patagnome@protonmail.com>
 * @version 0.0.0-novel.0
 * @since 0.0.0-novel.0
 * @name createControllerRoutes
 */
const path = require('path')

function noop () {}

const createControllerRoutes = (controllerUri) => {
  const controllerPath = path.resolve('src/inter/http/actions', controllerUri)
  const Controller = require(controllerPath)

  return Controller()
}

module.exports = createControllerRoutes

// EOF
