import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let RadionicaAkcije = new Schema({
    username: {
        type: String
    },
    prijavljen: {
        type: Boolean
    },
    radionica: {
        type: Object
    },
    lajkovi: {
        type: Boolean
    },
    attended: {
        type: Boolean
    },
    chat:{
        type: Array
    }
});

export default mongoose.model('RadionicaAkcije', RadionicaAkcije, 'radionicaAkcije');