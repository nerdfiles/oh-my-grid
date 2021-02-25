/**
 * @name delete
 * @module app/place
 * @description
 * Tag a place for deletion.
 */
module.exports = ({ placeRepository }) => {
  const remove = ({ id }) => {
    return Promise.resolve()
      .then(() => placeRepository.update({
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
