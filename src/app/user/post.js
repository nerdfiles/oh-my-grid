/**
 * @name post
 * @module app/user
 */
const { User } = require('../../domain/user');


module.exports = ({ userRepository, reply }) => {
  console.log(reply);
  const create = ({ body }) => {
    return Promise.resolve()
      .then(() => {
        const password = body.password || 'test';
        const entity = Object.assign({}, body, {
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
