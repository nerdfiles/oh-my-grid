/**
 * @module domain/helper
 */
const { 
  complement, 
  compose, 
  isNil, 
  pickBy 
} = require('ramda');
const notNull = compose(complement(isNil));

/**
 * @function cleanData
 * @returns {undefined}
 */
const cleanData = (entity) => pickBy(notNull, entity);

/**
 * @function generateLinksForItem
 * @static
 * @returns {array}
 */
const generateLinksForItem = (entityContext, type, entityName) => {
  const relations = require(`./${entityName}/relations.js`)
  const namespace = type + 'Relations';
  const _relations = relations[namespace];
  let host = 'http://localhost:4000';
  let token, eventToken;
  let _list = [];
  _relations.forEach((relRef) => {
    Object.keys(relRef).forEach((keyRef) => {
      if (relRef[keyRef].includes('{id}')) {
        relRef[keyRef] = relRef[keyRef].replace(/{id}/, entityContext.id);
      }
      if (relRef[keyRef].includes('{fullhost}')) {
        relRef[keyRef] = relRef[keyRef].replace(/{fullhost}/, host);
      }
      if (relRef[keyRef].includes('{token}')) {
        relRef[keyRef] = relRef[keyRef].replace(/{token}/, token);
      }
      if (relRef[keyRef].includes('{eventToken}')) {
        relRef[keyRef] = relRef[keyRef].replace(/{eventToken}/, eventToken);
      }
      _list.push({
        rel: keyRef,
        href: relRef[keyRef]
      });
    });
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
 * @param {object} repo Repostory for generating entities under a resource.
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
const generateActions = (_itemForms, entity, entityName) => {
	let host = `http://localhost:4000/api/${entityName}`;
  _itemForms.forEach(function (itemRef, key) {
    Object.keys(itemRef).forEach(function (keyRef) {
      if (itemRef[keyRef].includes('{id}')) {
        itemRef[keyRef] = itemRef[keyRef].replace(/{id}/, entity.id);
      }
      if (itemRef[keyRef].includes('{fullhost}')) {
        itemRef[keyRef] = itemRef[keyRef].replace(/{fullhost}/, host);
      }
      if (itemRef.hasOwnProperty('properties')) {
        itemRef.properties.forEach((p) => {
          Object.keys(p).forEach((k) => {
            if (p[k].includes('{status}')) {
              p[k] = p[k].replace(/{status}/, 'pending');
            }
          });
        });
      }
    });
  });
  return _itemForms;
};




module.exports = {
  cleanData,
  generateLinksForItem,
  generateClassList,
  generateActions,
  generateEntities
};

// EOF
