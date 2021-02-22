/**
 * @name delete
 * @module app/user
 * @description
 * function for user.
 */
module.exports = ({ userRepository }) => {
  // code for getting all the items
  const remove = ({ id }) => {
    return Promise
      .resolve()
      .then(() =>
        userRepository.update({
          isDeleted: 1
        }, {
          where: { id }
        })
      )
      .catch((error) => {
        throw new Error(error);
      });
  };

  return {
    remove
  };
};

// EOF
