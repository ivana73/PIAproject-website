"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = __importDefault(require("../model/user"));
class UserController {
    constructor() {
        this.login = (req, res) => {
            let kor_ime = req.body.username;
            let lozinka = req.body.password;
            user_1.default.findOne({ 'username': kor_ime, 'password': lozinka }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.register = (req, res) => {
            let korime = req.body.username;
            let email = req.body.mejl;
            user_1.default.findOne({ 'username': korime }, (err, user) => {
                if (err)
                    console.log(err);
                else {
                    if (user == null) {
                        user_1.default.findOne({ 'mejl': email }, (err, user2) => {
                            if (err)
                                console.log(err);
                            else {
                                if (user2 == null) {
                                    let user = new user_1.default({ ime: req.body.ime, prezime: req.body.prezime,
                                        username: req.body.username, password: req.body.password,
                                        telefon: req.body.telefon,
                                        mejl: req.body.mejl, tip: req.body.tip, nazivOrganizacije: req.body.nazivOrganizacije,
                                        adresaSedistaOrg: req.body.adresaSedistaOrg, matBrOrg: req.body.matBrOrg,
                                        odobren: req.body.odobren, slika: req.body.slika });
                                    user_1.default.insertMany(user).then(user => {
                                        res.status(200).json({ 'message': 'user added' });
                                    }).catch(err => {
                                        res.status(400).json({ 'message': 'error' });
                                    });
                                }
                                else {
                                    console.log(email);
                                    res.json({ 'message': 'Moguce je najvise jedan korisnicki nalog po email adresi.' });
                                }
                            }
                        });
                    }
                    else {
                        console.log(korime);
                        res.json({ 'message': 'Korisnicko ime je vec u upotrebi.' });
                    }
                }
            });
        };
        this.update = (req, res) => {
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            let username = req.body.username;
            let tel = req.body.telefon;
            let mejl = req.body.mejl;
            user_1.default.findOneAndUpdate({ 'username': username, }, { $set: { ime: ime, prezime: prezime, telefon: tel, mejl: mejl } }, (err, success) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'user updated' });
            });
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map