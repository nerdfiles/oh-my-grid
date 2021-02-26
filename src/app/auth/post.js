/**
 * @module app/auth/post
 * @param {Object} container - Container.
 * @param {Object} container.userRepository - User repo.
 * @description
 * POST for auth.
 */
const { User } = require('../../domain/user');


module.exports = ({ userRepository }) => {
  /**
   * @function register
   * @inner
   */
  const register = ({ body }) => {
    return Promise.resolve()
      .then(() => {
        const password = userRepository.securePassword(body) || 'test';
        const entity = Object.assign({}, body, {
          password
        });
        entity.createdAt = new Date();
        entity.updatedAt = new Date();
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
