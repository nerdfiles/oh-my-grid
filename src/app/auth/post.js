/**
 * @name post
 * @module app/auth
 * @description
 */
const { User } = require('../../domain/user');


module.exports = ({ userRepository }) => {
  const create = ({ body }) => {
    return Promise.resolve()
      .then(() => {
        console.log('body', body)
        const password = userRepository.securePassword(body) || 'test';
        const entity = Object.assign({}, body, {
          password
        });
        const user = User(entity);
        console.log(user);
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
