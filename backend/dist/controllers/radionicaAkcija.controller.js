"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadionicaAkcijaController = void 0;
const radionicaAkcije_1 = __importDefault(require("../model/radionicaAkcije"));
class RadionicaAkcijaController {
    constructor() {
        this.checkAkc = (req, res) => {
            let id = req.body.idRadionice;
            let username = req.body.username;
            radionicaAkcije_1.default.findOne({ 'radionica': id, username }, (err, radionicaAkc) => {
                if (err)
                    res.json(null);
                else {
                    res.json(radionicaAkc);
                }
            });
        };
        this.likeChange = (req, res) => {
            let id = req.body.idRadionice;
            let username = req.body.username;
            let like = req.body.like;
            radionicaAkcije_1.default.findOneAndUpdate({ 'radionica': id, 'username': username }, { $set: { 'lajkovi': like } }, (err, radioniceAkc) => {
                if (err)
                    console.log(err);
                else {
                    res.json('updatedLike');
                }
            });
        };
        this.addAkc = (req, res) => {
            let id = req.body.idRadionice;
            let username = req.body.username;
            let newRA = new radionicaAkcije_1.default({
                username: username,
                prijavljen: false,
                radionica: id,
                lajkovi: false,
                attended: true,
                chat: ["zapocni"]
            });
            radionicaAkcije_1.default.insertMany(newRA).then(user => {
                res.status(200).json({ 'message': 'added' });
            }).catch(err => {
                res.status(400).json({ 'message': 'error' });
            });
        };
        this.join = (req, res) => {
            let id = req.body.idRadionice;
            let username = req.body.username;
            let bul = false;
            radionicaAkcije_1.default.findOneAndUpdate({ 'radionica': id, 'username': username, 'prijavljen': bul }, { $set: { 'prijavljen': true } }, (err, radioniceAkc) => {
                if (err)
                    res.json(null);
                else {
                    res.json('1');
                }
            });
        };
        this.findAllRA4user = (req, res) => {
            radionicaAkcije_1.default.find({ 'prijavljen': true }, (err, radionice) => {
                if (err)
                    console.log(err);
                else {
                    res.json(radionice);
                }
            });
        };
    }
}
exports.RadionicaAkcijaController = RadionicaAkcijaController;
//# sourceMappingURL=radionicaAkcija.controller.js.map