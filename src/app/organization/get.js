 /**
 * @module app/organization/get
 * @description
 * Get all organizations.
 */
//const { itemForms, pageForms } = require('../domain/organization/transitions');

module.exports = ({ organizationRepository }) => {
  const all = () => {
    return Promise
      .resolve()
      .then(() =>
        organizationRepository.getAll({
          attributes: [
            'id', 'email', 
            'isDeleted', 'createdBy', 'updatedBy'
          ]
        })
      )
      .catch(error => {
        throw new Error(error)
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
