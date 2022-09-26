/**
 * @module app/place/delete
 * @param {Object} container - Container.
 * @param {Object} container.placeRepository - Place repo.
 * @description Tag a place for deletion.
 */

/**
 * occasion.
 *
 * @param {} id
 */
const occasion = (id) => {
  return ({ placeRepository }) => {
    return Promise.resolve()
      .then(() => placeRepository.update({
        isDeleted: 1
      }, {
        where: { id }
      }))
      .catch((error) => {
        throw new Error(error)
      })
  }
}

/**
 * dispatch.
 *
 * @param {} repo
 */
const dispatch = (repo) => {
  return ({ id }) => occasion(id)(repo)
}

/**
 * remove.
 *
 * @param {}
 */
const remove = ({ placeRepository }) => {
  const repo = dispatch(placeRepository)
  return {
    repo
  }
}

module.exports = remove

// EOF
