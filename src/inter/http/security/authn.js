/**
 * @module interfaces/http/security/authn
 */
const passport = require('passport');
const { ExtractJwt, Strategy } = require('passport-jwt');

module.exports = ({ config, repository: { userRepository } }) => {
  const params = {
    secretOrKey: config.AUTH_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt')
  };

  const strategy = new Strategy(params, (payload, done) => {
    userRepository.findById(payload.id)
      .then((user) => {
        done(null, user);
      })
      .catch((error) => done(error, null));
  });

  passport.use(strategy);

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  return {
    initialize: () => {
      return passport.initialize();
    },
    authenticate: () => {
      return passport.authenticate('jwt');
    }
  };
};

// EOF
