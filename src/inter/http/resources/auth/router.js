/**
 * @module interfaces/http/resources/auth/router
 */
const Status = require('http-status');
const { Router } = require('express');

module.exports = ({ postUseCase, logger, response: { Success, Fail } }) => {
  const router = Router();

  router
    .post('/register', (req, res) => {
      postUseCase
        .register({ body: req.body })
        .then(data => {
          res
            .status(Status.OK)
            .json(Success(data));
        })
        .catch((error) => {
          logger.error(error);
          res
            .status(Status.BAD_REQUEST)
            .json(Fail(error.message));
        });
    });

  return router;
};

// EOF
