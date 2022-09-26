/**
 * @module app/auth/post
 * @param {Object} container - Container.
 * @param {Object} container.userRepository - User repo.
 * @description
 * POST for auth.
 */
const { v4: uuidv4 } = require('uuid')
const { User } = require('../../domain/user')
const { DateTime } = require('luxon')

module.exports = ({ userRepository }) => {
  /**
   * @function register
   * @inner
   */
  const register = ({ body }) => {
    return Promise.resolve()
      .then(() => {
        const password = userRepository.securePassword(body) || 'test'
        const id = uuidv4()
        const entity = Object.assign({}, body, {
          id: id,
          password
        })
        entity.createdAt = DateTime.now()
        entity.updatedAt = DateTime.now()
        const user = User(entity)
        return userRepository.create(user)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }

  return {
    register
  }
}

// EOF
