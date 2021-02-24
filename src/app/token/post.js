/**
 * @name post
 * @module app/token
 */
const Token = require('../../domain/token');


/**
  * function for getter user.
  */
module.exports = ({ userRepository, webToken }) => {
  // code for getting all the items
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

        let signIn;
        try {
          signIn = webToken.signin();

          resolve({
            token: signIn({
              id: userCredentials.id,
              email: userCredentials.email
            })
          });
        } catch(e) {
          console.log(e);
          reject(e);
        }
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
