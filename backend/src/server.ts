import express from 'express';
import corse from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import user from './model/user';
import userRouter from './routers/user.router';

const app = express();

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2');

const conn = mongoose.connection;

conn.once('open', ()=>{
    console.log('mongo open');
})

const router = express.Router();

router.route('/login').post((req, res)=>{
    let username = req.body.username;
    let password = req.body.password;

    user.findOne({'username':username, 'password': password}, (err, user)=>{
        if(err) console.log(err);
        else res.json(user);
    } )
});

router.route('/register').post((req, res)=>{
    let u = new user(req.body);
    u.save().then(u=>{
        res.status(200).json({'user':'ok'});
    }).catch(err=>{
        res.status(400).json({'user':'no'});
    })
});

router.use('/users', userRouter);

router.use('/login', userRouter);

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));