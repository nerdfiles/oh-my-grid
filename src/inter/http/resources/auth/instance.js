/**
 * @name instance
 * @module interfaces/http/resources/auth
 */
const container = require('../../../../container');
const { post } = require('../../../../app/auth');


module.exports = () => {
  const { repository: { userRepository } } = container.cradle;

  const postUseCase = post({
    userRepository
  });

  return {
    postUseCase
  };
};

// EOF
