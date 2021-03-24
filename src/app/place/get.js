/**
 * @module app/place/get
 * @description
 * Get all places.
 */
const { itemForms } = require('../../domain/place/transitions');
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
        .then(async (documentSnapshots) => {
          let m = [];
          for (const doc of documentSnapshots) {
            let properties = doc.data() || {};
            let place = Place(properties);
            let links = await generateLinksForList(place, 'item', 'place', placeRepository);
            let actions = generateActions(itemForms, doc, 'places');
            let props = Object.assign({}, place, {});

            let hypermediaResponse = {
              actions: actions,
              links: links,
              properties: props,
              class: ['place'],
              entities: []
            };

            if (doc.exists) {
              m.push(hypermediaResponse);
            }
          }
          return m;
          // return documentSnapshots.map((doc) => {
          //   let properties = doc.data() || {};
          //   let place = Place(properties);
          //   let links = generateLinksForList(place, 'item', 'place', placeRepository);
          //   let actions = generateActions(itemForms, doc, 'places');
          //   let props = Object.assign({}, place, {});
          //
          //   let hypermediaResponse = {
          //     actions: actions,
          //     links: links,
          //     properties: props,
          //     class: ['place'],
          //     entities: []
          //   };
          //
          //   if (doc.exists) {
          //     return hypermediaResponse;
          //   }
          // });
        })
      )
      .catch(error => {
        throw new Error(error);
      })
  }

  return {
    all
  };
};

// EOF
