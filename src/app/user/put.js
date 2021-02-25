/**
 * @name put
 * @module app/user
 * @description
 * PUT for User.
 */
const { User } = require('../../domain/user');


module.exports = ({ userRepository }) => {
  const update = ({ id, body }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = User(body);
        await userRepository.update(user, {
          where: { id }
        });

        resolve(user);
      } catch (error) {
        reject(error);
      }
    })
  }

  return {
    update
  };
};

// EOF
