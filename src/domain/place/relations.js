/**
 * @module domain/place/relations
 * @description Think of rhetorical relations as templates with associated 
 * tokens.
 */

module.exports = {
  collectionRelations: [
    { self: '{fullhost}/api/places' },
    { prev: '{fullhost}/api/places?page={page}' },
    { next: '{fullhost}/api/places?page={page}' },
    { "users/places": '{fullhost}/api/users/places' }
  ],
  itemRelations: [
    { self: '{fullhost}/api/places/{id}' },
    { prev: '{fullhost}/api/places/{prevId}' },
    { next: '{fullhost}/api/places/{nextId}' }
  ],
  mathematicalRelations: [
    { '1+2': '{{fullhost}}/api/mathematical-objects?logic=K5' }
  ],
  temporalRelations: [
    { meets: '' },
    { metBy: '' },
    { before: '' },
    { after: '' }
  ],
  rhetoricalRelations: [
    { continuation: '{fullhost}/api/places/continuation?eventToken={eventToken}' },
    { narration: '{fullhost}/api/places/narration?eventToken={eventToken}' },
    { elaboration: '{fullhost/api/places/elaboration?eventToken={eventToken}' }
  ],
  attitudinalRelations: [
    { thinks: '{fullhost}/api/place/{id}/thinks?eventToken={eventToken}' },
    { means: '' },
    { use: '' },
    { mention: '' }
  ]
};

// EOF
