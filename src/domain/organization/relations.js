/**
 * @module domain/organization/relations
 * Think of rhetorical relations as templates with associated tokens.
 */
module.exports = {
  collectionRelations: [
    { self: '{fullhost}/api/organization' },
    { prev: '{fullhost}/api/organization?page={page}' },
    { next: '{fullhost}/api/organization?page={page}' }
  ],
  itemRelations: [
    { self: '{fullhost}/api/organization/{id}' },
    { prev: '{fullhost}/api/organization/{id}?id={prevId}' },
    { next: '{fullhost}/api/organization/{id}?id={nextId}' }
  ],
  temporalRelations: [
    { 
      meets: '',
      metBy: '',
      before: '',
      after: ''
    }
  ],
  rhetoricalRelations: [
    {
      continuation: '{fullhost}/api/users/continuation?token={token}&format=svg',
      narration: '{fullhost}/api/users/narration?token={token}',
      elaboration: '{fullhost/api/users/elaboration?token={token}'
    }
  ],
  attitudinalRelations: [
    {
      thinks: '',
      means: '',
      use: '',
      mention: ''
    }
  ]
};

// EOF
