/**
 * @module app/user/delete
 * @description
 * Tag a user for deletion.
 */
module.exports = ({ userRepository }) => {
  const remove = ({ id }) => {
    return Promise.resolve()
      .then(() => userRepository.update({
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
