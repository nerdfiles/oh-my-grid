/**
 * @module app/organization/delete
 * @description
 * Tag a organization for deletion.
 * @hfactor [o] Safety [x] Idempotent [o] Mutable [o] Presentation
 */
module.exports = ({ organizationRepository }) => {
  const remove = ({ id }) => {
    return Promise.resolve()
      .then(() => organizationRepository.update({
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
