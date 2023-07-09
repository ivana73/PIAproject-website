"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadionicaController = void 0;
const radionica_1 = __importDefault(require("../model/radionica"));
class RadionicaController {
    constructor() {
        this.getRadionicaByName = (req, res) => {
            let naziv = req.body.naziv;
            radionica_1.default.findOne({ 'naziv': naziv }, (err, radionica) => {
                if (err)
                    console.log(err);
                else {
                    res.json(radionica);
                }
            });
        };
        this.getRadionicaById = (req, res) => {
            let id = req.body.idRadionice;
            radionica_1.default.findOne({ '_id': id }, (err, radionica) => {
                if (err)
                    res.json(null);
                else {
                    res.json(radionica);
                }
            });
        };
        this.getSveAktuelneRadionice = (req, res) => {
            radionica_1.default.find({}, (err, radionice) => {
                if (err)
                    console.log(err);
                else {
                    res.json(radionice);
                }
            });
        };
        this.addComment = (req, res) => {
            let idRadionice = req.body.idRadionice;
            let username = req.body.username;
            let komentar = req.body.komentar;
            radionica_1.default.findOneAndUpdate({ '_id': idRadionice }, { $push: { 'komentari': komentar } }, (err, radioniceAkc) => {
                if (err)
                    console.log(err);
                else {
                    res.json('added');
                }
            });
        };
        this.getComments = (req, res) => {
            let idRadionice = req.body.idRadionice;
            radionica_1.default.findOne({ '_id': idRadionice }, (err, radioniceAkc) => {
                if (err)
                    console.log(err);
                else {
                    res.json(radioniceAkc);
                }
            });
        };
        this.decNumberMesta = (req, res) => {
            let idRadionice = req.body.idRadionice;
            let preostaloMesta = req.body.preostaloMesta;
            radionica_1.default.findOneAndUpdate({ '_id': idRadionice }, { $set: { 'preostaloMesta': preostaloMesta } }, (err, radioniceAkc) => {
                if (err)
                    console.log(err);
                else {
                    res.json('decresed');
                }
            });
        };
    }
}
exports.RadionicaController = RadionicaController;
//# sourceMappingURL=radionica.controller.js.map