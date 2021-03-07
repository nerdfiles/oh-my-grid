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
const pryjs = require('pryjs');

/**
 * @function generateLinks
 * @static
 * @returns {array}
 */
const generateLinks = (context) => ([]);

/**
 * @function generateClassList
 * @static
 * @returns {array}
 */
const generateClassList = (context) => (['organization']);

/**
 * @function generateEntities
 * @static
 * @returns {array}
 */
const generateEntities = (repo) => {
  return repo.getAll()
    .then((documentSnapshots) => {
      return documentSnapshots.map((doc) => {
        if (doc.exists) {
          return doc.data();
        }
      });
  });
};

/**
 * @function generateActions
 * @static
 * @returns {array}
 */
const generateActions = (_itemForms, entity) => {
  _itemForms.forEach(function (itemRef, key) {
    Object.keys(itemRef).forEach(function (keyRef) {
      if (itemRef[keyRef].includes('{id}')) {
        itemRef[keyRef] = itemRef[keyRef].replace(/{id}/, entity.id);
      }
    });
  });
  return _itemForms;
};

module.exports = ({ organizationRepository, placeRepository }) => {
  /**
   * @function create
   * @memberof Organization
   * @returns {undefined}
   */
  const create = ({ body }) => {
    return Promise.resolve()
      .then(() => {
        const id = uuidv4();
        const entity = Object.assign({}, body, {
          id: id
        });

        let actionsList = generateActions(itemForms, entity);

        const organization = Organization(entity);
        return organizationRepository.create(organization)
          .then(async (organizationRef) => {
            let relatedEntities = await generateEntities(placeRepository);
            let classList = generateClassList();
            let linkRelations = generateLinks();
            return Object.assign({}, {
              class: classList,
              properties: organizationRef,
              entities: relatedEntities,
              actions: actionsList,
              links: linkRelations
            });
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
