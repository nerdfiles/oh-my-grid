/**
 * @module app/place/post
 * @description
 * POST.
 */
const { v4: uuidv4 } = require('uuid');
const { Place } = require('../../domain/place');
const pryjs = require('pryjs');
const { DateTime } = require('luxon');


module.exports = ({ placeRepository, userRepository }) => {
  const create = ({ body }) => {
    return Promise.resolve()
      .then(async () => {
        const id = uuidv4();
        const foundAdmin = await userRepository.findOneAdmin().then((ref) => {
          let list = [];

          ref.forEach((d) => {
            const localData = d.data();
            list.push(localData);
          });

          return list[0];
        });
        const entity = Object.assign({}, body, {
          id: id,
          ownerId: !body.ownerId ? foundAdmin.id : undefined,
          createdAt: DateTime.now().toString(),
          updatedAt: DateTime.now().toString()
        });
        const place = Place(entity);
        return placeRepository.create(place);
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return {
    create
  };
};

// EOF
