import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posao } from '../models/posao.model';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  tip: string;
  adresa: string;
  kvadratura:string;
  brojProstorija: string;

  addObject(userid, tip, adresa, kvadratura, brojProstorija, rooms, id){
    const data={
      username:userid,
      tip: tip,
      adresa: adresa,
      kvadratura: kvadratura,
      brojProstorija: brojProstorija,
      rooms: rooms,
      ObjekatID: id
    }

    return this.http.post(`${this.uri}/users/addObject`, data);
  }
  getObjects(userid){
    const data={
      username:userid
    }
    return this.http.post(`${this.uri}/users/getObjects`, data);
  }
  getObjectbyID(userid){
    const data={
      id:userid
    }
    return this.http.post(`${this.uri}/users/getObjectbyID`, data);
  }
  addPosao(korisnik, agencija, datumEnd, statusOfAcceptance,statusOfWork, objekatID ){
    const data={
      korisnik: korisnik,
      agencija: agencija,
      datumEnd: datumEnd,
      statusOfAcceptance: statusOfAcceptance,
      statusOfWork: statusOfWork,
      objekatID: objekatID
    }
    return this.http.post(`${this.uri}/users/addPosao`, data);
  }
  getPoslove(userid, agencijaid){
    const data={
      username:userid,
      agencijaid: agencijaid
    }
    return this.http.post(`${this.uri}/users/getPoslove`, data);
  }

  updatePosao(posao){
    const data={
      posao:posao
    }
    return this.http.post(`${this.uri}/users/updatePosao`, data);
  }
  updateObjekat(objekat){
    const data={
      objekat:objekat
    }
    return this.http.post(`${this.uri}/users/updateObjekat`, data);
  }
}
