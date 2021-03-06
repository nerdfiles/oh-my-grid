/**
 * @module interfaces/http/resources/organization/router
 */
const Status = require('http-status');
const { Router } = require('express');


module.exports = ({
  getUseCase,
  postUseCase,
  logger,
  auth,
  response: { Success, Fail }
}) => {
  const router = Router();

/**
 * @swagger
 * definitions:
 *   organization:
 *     properties:
 *       id:
 *         type: string
 *         format: uuid
 *       email:
 *         type: string
 *       isDeleted:
 *         type: number
 *       createdBy:
 *         type: string
 *         format: uuid
 */

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
    });

/**
 * @swagger
 * /organizations:
 *   post:
 *     tags:
 *       - Users
 *     description: Create new organization
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
 *           $ref: '#/definitions/organization'
 *     responses:
 *       200:
 *         description: Successfully Created
 *         schema:
 *           $ref: '#/definitions/organization'
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
          console.log(data);
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
