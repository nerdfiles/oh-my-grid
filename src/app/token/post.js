/**
 * @name post
 * @module app/token
 * Validate for refresh token.
 */
const Token = require('../../domain/token');


module.exports = ({ userRepository, webToken }) => {
  const validate = ({ body }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const credentials = Token(body);
        const userCredentials = await userRepository.findByEmail({
          attributes: [
            'id', 'firstName', 'lastName', 'middleName', 'email', 'password', 
            'roleId', 'isDeleted', 'createdBy'
          ],
          where: {
            email: credentials.email,
            isDeleted: 0
          }
        });

        const validatePass = userRepository.validatePassword(userCredentials.password);

        if (!validatePass(credentials.password)) {
          throw new Error('Invalid Credentials');
        }

        let signIn = webToken.signin();

        resolve({
          token: signIn({
            id: userCredentials.id,
            email: userCredentials.email
          })
        });

      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  return {
    validate
  };
};

// EOF
