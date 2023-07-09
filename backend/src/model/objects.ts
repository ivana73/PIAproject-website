import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let Objects = new Schema({
  idObjekta: {
    type: String
  },
  username: {
    type: String
  },
  tip: {
    type: String
  },
  adresa: {
      type: String
  },
  kvadratura: {
      type: String
  },
  brojProstorija:{
      type: String
  },
  rooms:{
    type: Array
  }
});

export default mongoose.model('Objects', Objects, 'objects');
