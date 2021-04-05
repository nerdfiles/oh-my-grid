/**
 * @module app/transferAction/delete
 * @description
 * Tag a transferAction for deletion.
 */
module.exports = ({ transferActionRepository }) => {
  const remove = ({ id }) => {
    return Promise.resolve()
      .then(() => transferActionRepository.update({
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
