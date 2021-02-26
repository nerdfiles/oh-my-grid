/**
 * @module interfaces/http/resources/user/index
 */
const container = require('../../../../container');
const instance = require('./instance');
const router = require('./router.js');


module.exports = () => {
  const { 
    logger, 
    response: { Success, Fail }, 
    auth 
  } = container.cradle;
  const app = instance();

  return {
    app,
    router: router({ logger, auth, response: { Success, Fail }, ...app })
  };
};

// EOF
