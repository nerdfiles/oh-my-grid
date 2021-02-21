/**
 * @name instance
 * @module interfaces/http/resources/user
 */
const container = require('../../../../container');
const { post } = require('../../../../app/user');


module.exports = () => {
  const { 
    repository: {
      userRepository
    } 
  } = container.cradle;

  const postUseCase = post({ userRepository });

  return {
    postUseCase
  };
};

