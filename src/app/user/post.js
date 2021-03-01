/**
 * @module app/user/post
 * @description
 * Applications implement web components in SSR or use representors to receive 
 * model. Web components read from transition steps provided through DARRT. We 
 * can conceptualize transitions as action or interaction within the application 
 * namespace which will constitute link relations (perceptual relations as causal
 * relations; see Fazi's Contingent Computation). 
 */
const { v4: uuidv4 } = require('uuid');
const { User } = require('../../domain/user');


module.exports = ({ userRepository, reply }) => {
  const bulkCreate = () => {
    return Promise.resolve()
      .then(() => {
        return userRepository.bulkCreate();
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  const create = ({ body }) => {
    return Promise.resolve()
      .then(() => {
        const password = body.password || 'test';
        const id = uuidv4();
        const entity = Object.assign({}, body, {
          id: id,
          password
        });
        const user = User(entity);
        return userRepository.create(user);
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return {
    bulkCreate,
    create
  };
};

// EOF
