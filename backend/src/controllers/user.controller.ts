import * as express from 'express';
import User from '../model/user'

export class UserController {
    login = (req: express.Request, res: express.Response) => {
        let kor_ime = req.body.username;
        let lozinka = req.body.password;

        User.findOne({ 'username': kor_ime, 'password': lozinka }, (err, user) => {
            if (err) console.log(err);
            else res.json(user)
        })
    }
}