import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema({
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    username: {
        type: String
    },
    password:{
        type: String
    },
    telefon:{
        type: String
    },
    mejl: {
        type: String
    }

});

export default mongoose.model('User', User, 'users');