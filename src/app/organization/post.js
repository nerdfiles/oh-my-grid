/**
 * @module app/organization/post
 * @description
 * Apply transitions here to response from vendor database before passing into 
 * router.
 */
const { v4: uuidv4 } = require('uuid');
const { Organization } = require('../../domain/organization');
const { itemForms } = require('../../domain/organization/transitions');

const replaceId = (_itemForms, entity) => {
  _itemForms.forEach(function (itemRef, key) {
    Object.keys(itemRef).forEach(function (keyRef) {
      if (itemRef[keyRef].includes('{id}')) {
        itemRef[keyRef] = itemRef[keyRef].replace(/{id}/, entity.id);
      }
    });
  });
  return _itemForms;
}

module.exports = ({ organizationRepository }) => {
  const create = ({ body }) => {
    return Promise.resolve()
      .then(() => {
        const id = uuidv4();
        const entity = Object.assign({}, body, {
          id: id
        });

        let _itemForms = replaceId(itemForms, entity);

        const organization = Organization(entity);

        let o = organizationRepository.create(organization);
        return o.then((d) => {
          let _res = Object.assign({}, {
            class: ['organization'],
            properties: d,
            entities: [],
            actions: _itemForms,
            links: []
          });
          return _res;
        });
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
