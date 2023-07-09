"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const radionica_controller_1 = require("../controllers/radionica.controller");
const radionicaRouter = express_1.default.Router();
radionicaRouter.route('/getRadionicaByName').post((req, res) => new radionica_controller_1.RadionicaController().getRadionicaByName(req, res));
radionicaRouter.route('/getRadionicaById').post((req, res) => new radionica_controller_1.RadionicaController().getRadionicaById(req, res));
radionicaRouter.route('/getSveAktuelneRadionice').post((req, res) => new radionica_controller_1.RadionicaController().getSveAktuelneRadionice(req, res));
radionicaRouter.route('/addComment').post((req, res) => new radionica_controller_1.RadionicaController().addComment(req, res));
radionicaRouter.route('/getComments').post((req, res) => new radionica_controller_1.RadionicaController().getComments(req, res));
radionicaRouter.route('/decNumberMesta').post((req, res) => new radionica_controller_1.RadionicaController().decNumberMesta(req, res));
exports.default = radionicaRouter;
//# sourceMappingURL=radionica.router.js.map