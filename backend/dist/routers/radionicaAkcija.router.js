"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const radionicaAkcija_controller_1 = require("../controllers/radionicaAkcija.controller");
const radionicaAkcijaRouter = express_1.default.Router();
radionicaAkcijaRouter.route('/checkAkc').post((req, res) => new radionicaAkcija_controller_1.RadionicaAkcijaController().checkAkc(req, res));
radionicaAkcijaRouter.route('/likeChange').post((req, res) => new radionicaAkcija_controller_1.RadionicaAkcijaController().likeChange(req, res));
radionicaAkcijaRouter.route('/addAkc').post((req, res) => new radionicaAkcija_controller_1.RadionicaAkcijaController().addAkc(req, res));
radionicaAkcijaRouter.route('/join').post((req, res) => new radionicaAkcija_controller_1.RadionicaAkcijaController().join(req, res));
radionicaAkcijaRouter.route('/findAllRA4user').post((req, res) => new radionicaAkcija_controller_1.RadionicaAkcijaController().findAllRA4user(req, res));
exports.default = radionicaAkcijaRouter;
//# sourceMappingURL=radionicaAkcija.router.js.map