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
        const password = body.password || 'test';
        const entity = Object.assign({}, body, {
          password
        });
        const user = User(entity);
        var ur;
        try {
          ur = userRepository.create(user);
        } catch(e) {
          console.log(e);
        }
        return ur;
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
