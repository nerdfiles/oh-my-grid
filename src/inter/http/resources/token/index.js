/**
 * @module interfaces/http/resources/token/index
 */
const container = require('../../../../container');
const router = require('./router');
const instance = require('./instance');


module.exports = () => {
  const { logger, response: { Success, Fail }, jwt } = container.cradle;
  const app = instance();

  return {
    app,
    router: router({ logger, jwt, response: { Success, Fail }, ...app })
  };
};

// EOF
