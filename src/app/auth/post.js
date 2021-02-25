/**
 * @name post
 * @module app/auth
 * @description
 */
const { User } = require('../../domain/user');


module.exports = ({ userRepository }) => {
  const register = ({ body }) => {
    return Promise.resolve()
      .then(() => {
        const password = userRepository.securePassword(body) || 'test';
        const entity = Object.assign({}, body, {
          password
        });
        entity.createdAt = new Date();
        const user = User(entity);
        return userRepository.create(user);
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return {
    register
  };
};

// EOF
