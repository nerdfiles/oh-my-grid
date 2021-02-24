/**
 * @name post
 * @module app/user
 * @description
 * Applications implement web components in SSR or use representors to receive 
 * model.
 */
const { User } = require('../../domain/user');


module.exports = ({ userRepository, reply }) => {
  const component = () => {};
  const create = ({ body }) => {
    return Promise.resolve()
      .then(() => {
        const password = body.password || 'test';
        const entity = Object.assign({}, body, {
          password
        });
        const user = User(entity);
        reply().then(function (res) {
          console.log(res);
        })
        .catch(function (err) {
          console.log({err});
        });
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
