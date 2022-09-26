/**
 * @module interfaces/http/resources/organization/instance
 * @description
 * Should transitions be a containerized module?
 */
const container = require('../../../../container')
const { post, get } = require('../../../../app/organization')


module.exports = () => {
  const { 
    repository: {
      organizationRepository,
      placeRepository
    }
  } = container.cradle

  const postUseCase = post({ organizationRepository, placeRepository })
  const getUseCase = get({ organizationRepository })

  return {
    postUseCase,
    getUseCase
  }
}

