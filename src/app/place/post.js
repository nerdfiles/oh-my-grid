/**
 * @module app/place/post
 * @description
 * POST.
 */
const { v4: uuidv4 } = require('uuid');
const { Place } = require('../../domain/place');
const pryjs = require('pryjs');


module.exports = ({ placeRepository, userRepository }) => {
  const create = ({ body }) => {
    return Promise.resolve()
      .then(async () => {
        const id = uuidv4();
        const foundAdmin = await userRepository.findOneAdmin().then((ref) => {
          let list = [];
          ref.forEach((d) => {
            list.push(d.data());
          })
          return list[0];
        });
        const entity = Object.assign({}, body, {
          id: id,
          ownerId: !body.ownerId ? foundAdmin.id : undefined
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
