import express from 'express';
import { RadionicaAkcijaController } from '../controllers/radionicaAkcija.controller';
const radionicaAkcijaRouter = express.Router();

radionicaAkcijaRouter.route('/checkAkc').post(
    (req, res) => new RadionicaAkcijaController().checkAkc(req, res)
)

radionicaAkcijaRouter.route('/likeChange').post(
    (req, res) => new RadionicaAkcijaController().likeChange(req, res)
)

radionicaAkcijaRouter.route('/addAkc').post(
    (req, res) => new RadionicaAkcijaController().addAkc(req, res)
)

radionicaAkcijaRouter.route('/join').post(
    (req, res) => new RadionicaAkcijaController().join(req, res)
)

radionicaAkcijaRouter.route('/findAllRA4user').post(
    (req, res) => new RadionicaAkcijaController().findAllRA4user(req, res)
)

export default radionicaAkcijaRouter;