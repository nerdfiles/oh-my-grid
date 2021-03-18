/**
 * @module domain/place/relations
 * Think of rhetorical relations as templates with associated tokens.
 */
module.exports = {
  collectionRelations: [
    { self: '{fullhost}/api/places' },
    { prev: '{fullhost}/api/places?page={page}' },
    { next: '{fullhost}/api/places?page={page}' }
  ],
  itemRelations: [
    { self: '{fullhost}/api/places/{id}' },
    { prev: '{fullhost}/api/places/{id}?id={prevId}' },
    { next: '{fullhost}/api/places/{id}?id={nextId}' }
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
