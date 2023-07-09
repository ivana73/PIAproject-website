import mongoose from 'mongoose';
import User from './user';
const Schema = mongoose.Schema;

let Posao = new Schema({
  agencija: {
    type: String
  },
  klijenat: {
    type: String
  },
  datumZavrsetka: {
      type: String
  },
  statusOfAcceptance: {
      type: String
  },
  statusOfWork:{
      type: String
  },
  objekat:{
    type: String
  },
  novac:{
    type: String
  }
});

export default mongoose.model('Posao', Posao, 'posao');
