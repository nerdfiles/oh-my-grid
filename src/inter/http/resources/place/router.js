/**
 * @module interfaces/http/resources/place/router
 */
const Status = require('http-status');
const { Router } = require('express');


module.exports = ({
  getUseCase,
  postUseCase,
  putUseCase,
  removeUseCase,
  logger,
  auth,
  response: { Success, Fail }
}) => {
  const router = Router();

  /**
   * @swagger
   * definitions:
   *   place:
   *     properties:
   *       id:
   *         type: string
   *         format: uuid
   *       latitude:
   *         type: decimal
   *       longitude:
   *         type: decimal
   */
  //router.use(auth.authenticate());

  router
    .get('/', (req, res) => {
      getUseCase.all().then(function (data) {
        res.status(Status.OK).json(Success(data));
      })
      .catch((error) => {
        logger.error(error);
        res
          .status(Status.BAD_REQUEST)
          .json(Fail(error.message));
      });
    })

  router
    .put('/', (req, res) => {
      putUseCase.update({ id: req.body.id, body: req.body })
        .then(data => {
          res.status(Status.OK).json(Success(data))
        })
        .catch(error => {
          res.status(Status.BAD_REQUEST).json(Fail(error.message));
        })
    });

  router
    .delete('/', (req, res) => {
      deleteUseCase.remove({ id: req.body.id })
        .then(data => {
          res.status(Status.OK).json(Success(data))
        })
        .catch(error => {
          res.status(Status.BAD_REQUEST).json(Fail(error.message));
        })
    });

  /**
   * @swagger
   * /places:
   *   post:
   *     tags:
   *       - Users
   *     description: Create new place
   *     security:
   *       - paseto: []
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: User's Entity
   *         in: body
   *         required: true
   *         type: string
   *         schema:
   *           $ref: '#/definitions/place'
   *     responses:
   *       200:
   *         description: Successfully Created
   *         schema:
   *           $ref: '#/definitions/place'
   *       401:
   *         $ref: '#/responses/Unauthorized'
   *       400:
   *         $ref: '#/responses/BadRequest'
   */
  router
    .post('/', (req, res) => {
      postUseCase
        .create({ body: req.body })
        .then(data => {
          res.status(Status.OK).json(Success(data));
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
