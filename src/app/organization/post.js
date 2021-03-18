/**
 * @namespace Organization
 * @module app/organization/post
 * @description
 * Apply transitions here to response from vendor database before passing into 
 * router.
 */
const { v4: uuidv4 } = require('uuid');
const { Organization } = require('../../domain/organization');
const { itemForms } = require('../../domain/organization/transitions');
const { itemRelations } = require('../../domain/organization/relations');

const {
  generateLinksForItem,
  generateActions,
  generateClassList,
  generateEntities
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

        const actionsList = generateActions(itemForms, entity, 'organizations');
        const classList = generateClassList();
        const relatedEntities = await generateEntities(placeRepository);

        const organization = Organization(entity);
        return organizationRepository.create(organization)
          .then(async (entityRef) => {
            const linkRelations = generateLinksForItem(entityRef, 'item', 'organization');
            return Object.assign({}, {
              class: classList,
              properties: entityRef,
              entities: relatedEntities,
              actions: actionsList,
              links: linkRelations
            });
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
