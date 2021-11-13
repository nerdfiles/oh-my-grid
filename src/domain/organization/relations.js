/**
 * @module domain/organization/relations
 * @description Think of rhetorical relations as templates with associated 
 * tokens.
 */

// @TODO parametic names for the link relation names, whateverness for the [href]
module.exports = () => {
  return ({
    collectionRelations: [
      { self: '{fullhost}/api/organizations' },
      { prev: '{fullhost}/api/organizations?page={page}' },
      { next: '{fullhost}/api/organizations?page={page}' }
    ],
    itemRelations: [
      { self: '{fullhost}/api/organizations/{id}' },
      { prev: '{fullhost}/api/organizations/{prevId}' },
      { next: '{fullhost}/api/organizations/{nextId}' }
    ],
    temporalRelations: [
      { meets: '' },
      { metBy: '' },
      { before: '' },
      { after: '' }
    ],
    rhetoricalRelations: [
      { continuation: '{fullhost}/api/organizations/continuation?eventToken={eventToken}' },
      { narration: '{fullhost}/api/organizations/narration?eventToken={eventToken}' },
      { elaboration: '{fullhost}/api/organizations/elaboration?eventToken={eventToken}' }
    ],
    attitudinalRelations: [
      { thinks: '{fullhost}/api/organization/{id}/thinks?eventToken={eventToken}' },
      { means: '' },
      { use: '' },
      { mention: '' }
    ]
  });
};

// EOF
