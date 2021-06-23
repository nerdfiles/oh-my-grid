/**
 * @module interfaces/http/actions/transferAction/router
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
 *   user:
 *     properties:
 *       id:
 *         type: string
 *         format: uuid
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       middleName:
 *         type: string
 *       email:
 *         type: string
 *       roleId:
 *         type: number
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
    })

/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *       - Users
 *     description: Create new user
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
 *           $ref: '#/definitions/user'
 *     responses:
 *       200:
 *         description: Successfully Created
 *         schema:
 *           $ref: '#/definitions/user'
 *       401:
 *         $ref: '#/responses/Unauthorized'
 *       400:
 *         $ref: '#/responses/BadRequest'
 */
  const POST = (req, res) => {
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
  };

  const TransferAction = require('../../../../domain/transferAction');

  // try {
  //   POST.apiDoc = TransferAction.post.apiDoc;
  // } catch (err) {
  //   console.error(err);
  // }

  router
    .post('/', POST);

  return router;
};

// EOF
