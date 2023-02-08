import * as express from 'express';
import Radionica from '../model/radionica';

export class RadionicaController {

    getRadionicaByName = (req: express.Request, res: express.Response)=>{
        let naziv = req.body.naziv;

        Radionica.findOne({'naziv':naziv},(err, radionica)=>{
            if(err) console.log(err);
            else {
                res.json(radionica)
            }
        })
    }

    getSveAktuelneRadionice = (req: express.Request, res: express.Response)=>{

        Radionica.find({},(err, radionice)=>{
            if(err) console.log(err);
            else {
                res.json(radionice)
            }
        })
    }

    addComment = (req: express.Request, res: express.Response)=>{
        let idRadionice = req.body.idRadionice;
        let username = req.body.username;
        let komentar = req.body.komentar;

        Radionica.findOneAndUpdate({'_id':idRadionice},{$push: {'komentari': komentar}},(err, radioniceAkc)=>{
                if(err) console.log(err);
                else {
                    res.json('added');
                }
        });
    }

    getComments = (req: express.Request, res: express.Response)=>{
        let idRadionice = req.body.idRadionice;
        
        Radionica.findOne({'_id':idRadionice},(err, radioniceAkc)=>{
                if(err) console.log(err);
                else {
                    res.json(radioniceAkc);
                }
        });
    }
}