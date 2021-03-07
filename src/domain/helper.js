/**
 * @module domain/helper
 */
const { 
  complement, 
  compose, 
  isNil, 
  pickBy 
} = require('ramda');
const linkForms = {
  self: 'http://localhost:4000/api/organization/{id}'
};

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




module.exports = {
  cleanData,
  generateLinksForItem,
  generateClassList,
  generateActions,
  generateEntities
};

// EOF
