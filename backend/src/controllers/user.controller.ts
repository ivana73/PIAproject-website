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

    register = (req: express.Request, res: express.Response)=>{
        let korime = req.body.username;
        let email = req.body.mejl;


        User.findOne({'username': korime}, (err, user)=>{
            if(err) console.log(err);
            else {
                if(user == null){
                    User.findOne({'mejl': email}, (err, user2)=>{
                        if(err) console.log(err);
                        else {
                            if(user2 == null){
                                let user = new User({ime: req.body.ime, prezime: req.body.prezime,
                                    username: req.body.username, password: req.body.password, 
                                    telefon: req.body.telefon,
                                    mejl: req.body.mejl, tip: req.body.tip, nazivOrganizacije: req.body.nazivOrganizacije, 
                                    adresaSedistaOrg: req.body.adresaSedistaOrg, matBrOrg: req.body.matBrOrg,
                                    odobren: req.body.odobren, slika:req.body.slika})
                                
                                User.insertMany(user).then(user=>{
                                    res.status(200).json({'message': 'user added'});
                                }).catch(err=>{
                                    res.status(400).json({'message': 'error'})
                                })

                                } else {
                                    console.log(email);
                                    res.json({'message': 'Moguce je najvise jedan korisnicki nalog po email adresi.'});
                            }
                        }
                    })

                } else{
                    console.log(korime);
                    res.json({'message': 'Korisnicko ime je vec u upotrebi.'});
                }
            }
        })

    }

    update = (req: express.Request, res: express.Response) => {
        let ime = req.body.ime;
        let prezime = req.body.prezime;
        let username = req.body.username;
        let tel = req.body.telefon;
        let mejl = req.body.mejl;
    
                User.findOneAndUpdate({ 'username':username,}, { $set: { ime: ime, prezime:prezime, telefon:tel, mejl:mejl } }, 
                (err, success) => {
                    if (err) console.log(err);
                    else res.json({'message': 'user updated'}); 
                })
    }

}