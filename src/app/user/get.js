/**
 * @module app/user/get
 * @description
 * Get all users.
 */
module.exports = ({ userRepository }) => {
  const all = () => {
    return Promise
      .resolve()
      .then(() =>
        userRepository.getAll({
          attributes: [
            'id', 'firstName', 'lastName', 'middleName', 'email', 'roleId', 'isDeleted', 'createdBy', 'updatedBy'
          ]
        })
      )
      .catch(error => {
        throw new Error(error)
      });
  };

  return {
    all
  };
};

// EOF
