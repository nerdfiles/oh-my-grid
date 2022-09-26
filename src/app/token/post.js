/**
 * @module app/token/post
 * @description
 * Validate for refresh token.
 */
const { Token } = require('../../domain/token')


module.exports = ({ userRepository, webToken }) => {
  const validate = ({ body }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const credentials = Token(body)
        console.log(credentials)
        const userCredentials = await userRepository.findByEmail({
          attributes: [
            'id', 'email', 'password'
          ],
          where: {
            email: credentials.email,
            isDeleted: 0
          }
        })
        console.log(userCredentials)

        const validatePass = userRepository.validatePassword(userCredentials.password)

        if (!validatePass(credentials.password)) {
          throw new Error('Invalid Credentials')
        }

        let signIn = webToken.signin()

        resolve({
          token: signIn({
            id: userCredentials.id,
            email: userCredentials.email
          })
        })

      } catch (error) {
        console.log(error)
        reject(error)
      }
    })
  }

  return {
    validate
  }
}

// EOF
