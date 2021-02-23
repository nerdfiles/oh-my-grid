/**
 * @name instance
 * @module interfaces/http/resources/user
 */
const container = require('../../../../container');
const { post, get } = require('../../../../app/user');


module.exports = () => {
  const { 
    repository: {
      userRepository
    },
    apiService
  } = container.cradle;
  const reply = apiService().reply;

  const postUseCase = post({ userRepository, reply });
  const getUseCase = get({ userRepository });

  return {
    postUseCase,
    getUseCase
  };
};

