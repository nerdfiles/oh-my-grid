/**
 * @module domain/organization/relations
 */
module.exports = {
  collectionRelations: [
    { self: '{fullhost}/api/organization' },
    { prev: '{fullhost}/api/organization?page={page}' },
    { next: '{fullhost}/api/organization?page={page}' }
  ],
  itemRelations: [
    { self: '{fullhost}/api/organization/{id}' },
    { prev: '{fullhost}/api/organization/{id}?id={id}' },
    { next: '{fullhost}/api/organization/{id}?id={id}' }
  ]
};

// EOF
