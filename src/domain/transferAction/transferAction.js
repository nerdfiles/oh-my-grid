/**
 * @module domain/transferAction/transferAction
 */
const t = require('tcomb');
const { compose } = require('ramda');
const { cleanData } = require('../helper.js');


const TransferAction = t.struct({
  id: t.maybe(t.String),
  agentId: t.maybe(t.String),
  objectId: t.maybe(t.String),
  toLocation: t.maybe(t.String),
  fromLocation: t.maybe(t.String),
  isDeleted: t.Number,
  createdBy: t.maybe(t.String),
  updatedBy: t.maybe(t.String),
  createdAt: t.maybe(t.String),
  updatedAt: t.maybe(t.String)
});

const agentId = Object.assign({}, t.maybe(t.String), {
  type: 'string'
});

Object.assign(TransferAction, {
  post: {
    apiDoc: {
      properties: {
        name: {
          type: 'string'
        },
        agentId: agentId,
        objectId: {
          type: 'string'
        },
        fromLocation: {
          type: 'string'
        },
        toLocation: {
          type: 'string'
        }
      }
    }
  }
});

module.exports = compose(
  cleanData,
  TransferAction
);

// EOF
