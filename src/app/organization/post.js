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
const linkForms = {
  self: 'http://localhost:4000/api/organization/{id}'
};


/**
 * @function generateLinksForItem
 * @static
 * @returns {array}
 */
const generateLinksForItem = (entityContext) => {
	let host = 'http://localhost:4000';
  let _list = [];
  Object.keys(linkForms).forEach((keyRef) => {
    if (linkForms[keyRef].includes('{id}')) {
      linkForms[keyRef] = linkForms[keyRef].replace(/{id}/, entityContext.id);
    }
		if (linkForms[keyRef].includes('{fullhost}')) {
			linkForms[keyRef] = linkForms[keyRef].replace(/{fullhost}/, host);
		}
    _list.push({
      rel: [keyRef],
      href: linkForms[keyRef]
    })
  });
  return _list;
};

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
          let data = doc.data()
          return {
            class: ['items collection'],
            rel: [''],
            properties: data,
            links: []
          };
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
	let host = 'http://localhos:4000/api/organizations';
  _itemForms.forEach(function (itemRef, key) {
    Object.keys(itemRef).forEach(function (keyRef) {
      if (itemRef[keyRef].includes('{id}')) {
        itemRef[keyRef] = itemRef[keyRef].replace(/{id}/, entity.id);
      }
      if (itemRef[keyRef].includes('{fullhost}')) {
        itemRef[keyRef] = itemRef[keyRef].replace(/{fullhost}/, host);
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
          .then(async (entityRef) => {
            let relatedEntities = await generateEntities(placeRepository);
            let classList = generateClassList();
            let linkRelations = generateLinksForItem(entityRef);
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
        throw new Error(error);
      });
  };

  return {
    create
  };
};

// EOF
