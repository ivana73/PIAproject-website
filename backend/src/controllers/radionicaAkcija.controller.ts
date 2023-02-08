import * as express from 'express';
import RadionicaAkcije from '../model/radionicaAkcije';

export class RadionicaAkcijaController {

    checkAkc = (req: express.Request, res: express.Response)=>{
        let id = req.body.idRadionice;
        let username = req.body.username;

        RadionicaAkcije.findOne({'radionica':id, username},(err, radionicaAkc)=>{
            if(err) res.json(null);
            else {
                res.json(radionicaAkc);
            }
        })
    }

    likeChange = (req: express.Request, res: express.Response)=>{
        let id = req.body.idRadionice;
        let username = req.body.username;
        let like = req.body.like;
    
        RadionicaAkcije.findOneAndUpdate({'radionica':id, 'username': username},{$set: {'lajkovi': like}},(err, radioniceAkc)=>{
            if(err) console.log(err);
            else {
                res.json('updatedLike');
            }
         });
    
    }

    addAkc = (req: express.Request, res: express.Response)=>{
        let id = req.body.idRadionice;
        let username = req.body.username;
    
        let newRA = new RadionicaAkcije({
            username: username,
            prijavljen:  false,
            radionica: id,
            lajkovi: false,
            attended: true,
            chat: []
            })
        
            RadionicaAkcije.insertMany(newRA).then(user=>{
            res.status(200).json({'message': 'added'});
        }).catch(err=>{
            res.status(400).json({'message': 'error'})
        })
    
    }

}


