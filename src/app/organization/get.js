 /**
 * @module app/organization/get
 * @description
 * Get all organizations.
 */
const { itemForms } = require('../../domain/organization/transitions');
const { Organization } = require('../../app/organization');

module.exports = ({ organizationRepository }) => {
  const all = () => {
    return Promise
      .resolve()
      .then(() => {
        return organizationRepository.getAll({
            attributes: [
              'id', 'email', 
              'isDeleted', 'createdBy', 'updatedBy'
            ]
          }).then(function (_res) {
            return _res[0].get().then(function (r) {
              return r;
            });
        });
      })
      .catch(error => {
        throw new Error(error);
      });
  };

  // const transitionItem = () => {
  //   return Promise
  //     .resolve()
  //     .then(() => {
  //       return itemForms.map((itemRef) => {
  //         return itemRef;
  //       });
  //     })
  // };

  return {
    all
  };
};

// EOF
