/**
 * @module app/user/post
 * @description
 * Applications implement web components in SSR or use representors to receive 
 * model.
 */
const { v4: uuidv4 } = require('uuid');
const { User } = require('../../domain/user');


module.exports = ({ userRepository, reply }) => {
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
    create
  };
};

// EOF
