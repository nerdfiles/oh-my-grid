/**
 * @module interfaces/http/api-doc
 */
const TransferAction = require('../../domain/transferAction');

module.exports = {
  swagger: '2.0',

  basePath: '/v3',

  info: {
    title: 'grid',
    version: '0.0.1',
  },

  definitions: {
    Error: {
      additionalProperties: true,
    },

		//TransferAction: TransferAction,

		// @see domain model for User
    User: {
      properties: {
        name: {
          type: 'string',
        },
        friends: {
          type: 'array',
          items: {
            $ref: '#/definitions/User',
          },
        },
				actions: {
					type: 'array',
					items: {
						$ref: '#/definitions/TransferAction'
					}
				}
      },
      required: ['name'],
    },
  },

  paths: {},

  tags: [],
};

// EOF
