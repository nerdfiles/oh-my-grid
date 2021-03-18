/**
 * @module app/place/get
 * @description
 * Get all places.
 */
const { itemForms } = require('../../domain/organization/transitions');
const { Place } = require('../../domain/place');
const {
  generateActions,
  generateLinksForList,
} = require('../../domain/helper.js');


module.exports = ({ placeRepository }) => {
  const all = () => {
    return Promise
      .resolve()
      .then(() => placeRepository.getAll()
      .then((documentSnapshots) => {
        return documentSnapshots.map((doc) => {
          let properties = doc.data() || {};

          let place = Place(properties);

          let hypermediaResponse = {
            actions: generateActions(itemForms, doc, 'places'),
            links: generateLinksForList(place, 'item', 'place'),
            properties: Object.assign({}, place, {}),
            class: ['place'],
            entities: []
          };

          if (doc.exists) {
            return hypermediaResponse;
          }
        });
      }))
      .catch(error => {
        throw new Error(error);
      })
  }

  return {
    all
  };
};

// EOF
