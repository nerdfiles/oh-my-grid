
const { expect } = require('chai')
const getUsecase = require('src/app/organization/get')

describe('App -> Organization -> Get', () => {
  let useCase
  const mockData = [{
    organization: 'Test'
  }]

  describe('Success path', () => {
    beforeEach(() => {
      const MockRepository = {
        getAll: () => mockData
      }

      useCase = getUsecase({
        organizationRepository: MockRepository
      })
    })

    it('should display all the records on success', async () => {
      const lists = await useCase.all()
      expect(lists).to.equal(mockData)
    })
  })

  describe('Fail path', () => {
    beforeEach(() => {
      const MockRepository = {
        // eslint-disable-next-line prefer-promise-reject-errors
        getAll: () => Promise.reject('Error')
      }

      useCase = getUsecase({
        organizationRepository: MockRepository
      })
    })

    it('should display error on rejection', async () => {
      let error
      try {
        await useCase.all()
      } catch (e) {
        error = e.message
      }
      expect(error).to.equal('Error')
    })
  })
})
