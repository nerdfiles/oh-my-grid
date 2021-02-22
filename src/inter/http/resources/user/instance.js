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
    },
    apiService
  } = container.cradle;
  //console.log(apiService().API_KEY)

  const postUseCase = post({ userRepository, reply: apiService().reply });

  return {
    postUseCase
  };
};

