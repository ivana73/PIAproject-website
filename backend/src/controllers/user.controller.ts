import * as express from 'express';
import User from '../model/user'
import Objects from '../model/objects'
import Posao from '../model/posao';


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
            if(err) console.log(1);
            else {
                if(user == null){
                    User.findOne({'mejl': email}, (err, user2)=>{
                        if(err) console.log(err);
                        else {
                            if(user2 == null){
                                let user = new User({'ime': req.body.ime, 'prezime': req.body.prezime,
                                    'username': req.body.username, 'password': req.body.password, 
                                    'telefon': req.body.telefon,
                                    'mejl': req.body.mejl, 'tip': req.body.tip, 'nazivOrganizacije': req.body.nazivOrganizacije, 
                                    'adresaSedistaOrg': req.body.adresaSedistaOrg, 'matBrOrg': req.body.matBrOrg,
                                    'odobren': req.body.odobren, 'slika':req.body.slika, 'kratakOpis': req.body.kratakOpis})
                                
                                user.save().then(() => {
                                    res.status(200).json({ 'message': 'User added successfully' });
                                  })
                                  .catch((err) => {
                                    res.status(500).json({ 'message': 'Server Error' });
                                  });

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

    addObject = (req: express.Request, res: express.Response)=>{
        let korime = req.body.username;
        let tip = req.body.tip;
        let adresa = req.body.adresa; // Corrected field assignment
        let kvadratura = req.body.kvadratura; // Corrected field assignment
        let brojProstorija = req.body.brojProstorija; // Corrected field assignment
        let array = req.body.rooms;
        let id = req.body.ObjekatID
        User.findOne({ 'username': korime }, (err, user) => {
              let object = new Objects({
                'username': korime,
                'tip': tip,
                'adresa': adresa,
                'kvadratura': kvadratura,
                'brojProstorija': brojProstorija,
                'rooms' : array,
                'idObjekta': id
              });
      
              object.save()
                .then(() => {
                  res.status(200).json({ 'message': 'Object added successfully' });
                })
                .catch((err) => {
                  res.status(500).json({ 'message': 'Server Error' });
                });
            })
        }

    getObjects = (req: express.Request, res: express.Response) => {
        let korime = req.body.username;
        Objects.find({'username': korime}, (err, objects) => {
            if (err) {
            res.json(null);
            } else {
            res.json(objects);
            }
        });
        }
    
    getObjectbyID = (req: express.Request, res: express.Response) => {
        let korime = req.body.id;
        Objects.findOne({'_id': korime}, (err, objects) => {
            if (err) {
            res.json(null);
            } else {
            res.json(objects);
            }
        });
        }    

    getSveAgencije = (req: express.Request, res: express.Response)=>{
    
    User.find({'tip': 'agencija'},(err, agencija)=>{
        if(err) console.log(err);
        else {
            res.json(agencija)
        }
    })
    }

    addComment = (req: express.Request, res: express.Response)=>{
        let idRadionice = req.body.idRadionice;
        let komentar = req.body.komentar;

        User.findOneAndUpdate({'username':idRadionice},{$push: {'komentari': komentar}},(err, radioniceAkc)=>{
                if(err) console.log(err);
                else {
                    res.json('added');
                }
        });
    }
  
    getComments = (req: express.Request, res: express.Response)=>{
        let idRadionice = req.body.idRadionice;
        
        User.findOne({'username':idRadionice},(err, radioniceAkc)=>{
                if(err) console.log(err);
                else {
                    res.json(radioniceAkc);
                }
        });
    }
      changePassword = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;
    
        User.findOneAndUpdate({'username': username},{$set: {'password': password}},(err, user)=>{
            if(err) console.log(err);
            else {
                res.json(user);
            }
         });
    
    }

    addPosao = (req: express.Request, res: express.Response)=>{

        let posao = new Posao({klijenat: req.body.korisnik,
            agencija: req.body.agencija,
            datumZavrsetka: req.body.datumEnd,
            statusOfAcceptance: req.body.statusOfAcceptance,
            statusOfWork: req.body.statusOfWork,
            objekat: req.body.objekatID});
        
        posao.save()
                .then(() => {
                  res.status(200).json({ 'message': 'Posao added successfully' });
                })
                .catch((err) => {
                  res.status(500).json({ 'message': ' Error posao 1' });
                });

    }

    getPoslove =  (req: express.Request, res: express.Response) => {
        let korime = req.body.username;
        let agencija = req.body.agencijaid;
        if (korime != null) {
            Posao.find({'klijenat': korime}, (err, posao) => {
                if (err) {
                res.json(null);
                } else {
                res.json(posao);
                }
            });
        }
        else {
            Posao.find({'agencija': agencija}, (err, posao) => {
                if (err) {
                res.json(null);
                } else {
                res.json(posao);
                }
            });
        }
    }

    updatePosao = (req: express.Request, res: express.Response)=>{
        let posao = req.body.posao;
    
        Posao.findOneAndUpdate({'_id': posao},{$set: {'agencija':posao.agencija,'statusOfAcceptance': posao.statusOfAcceptance, 'novac': posao.novac, 'statusOfWork': posao.statusOfWork}},(err, user)=>{
            if(err) console.log(err);
            else {
                res.json(user);
            }
         });
    
    }

    updateObjekat = (req: express.Request, res: express.Response)=>{
        let objekat = req.body.objekat;
    
       Objects.findOneAndUpdate({'_id': objekat},{$set: {'rooms': objekat.rooms}},(err, user)=>{
            if(err) console.log(err);
            else {
                res.json(user);
            }
         });
    
    }
}