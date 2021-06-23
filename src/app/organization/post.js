/**
 * @namespace Organization
 * @module app/organization/post
 * @description
 * Apply transitions here to response from vendor database before passing into 
 * router.
 */
const { v4: uuidv4 } = require('uuid');
const { Organization } = require('../../domain/organization');
const { itemForms } = require('../../domain/organization/transitions.js');
const { itemRelations } = require('../../domain/organization/relations');

const {
  generateLinksForItem,
  generateActions,
  generateClassList,
  generateEntities,
  mediate
} = require('../../domain/helper.js');

module.exports = ({ organizationRepository, placeRepository }) => {

  /**
   * @function create
   * @memberof Organization
   * @returns {undefined}
   */
  const create = ({ body }) => {
    return Promise.resolve()
      .then(async () => {
        const id = uuidv4();
        const entity = Object.assign({}, body, {
          id: id
        });
        return organizationRepository.create(organization)
          .then(async (entityRef) => {
            var contextConfiguration = {};
            var output = mediate(contextConfiguration)(entity)(entityRef);
            return output;
          });
      })
      .catch((error) => {
        console.error(error);
        throw new Error(error);
      });

  };

  return {
    create
  };
};

// EOF
