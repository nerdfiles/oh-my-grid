/**
 * @module interfaces/http/resources/token/instance
 */
const container = require('../../../../container');
const { post } = require('../../../../app/token');


module.exports = () => {
  const { repository: { userRepository }, jwt } = container.cradle;

  const postUseCase = post({
    userRepository,
    webToken: jwt
  });

  return {
    postUseCase
  };
};

// EOF
