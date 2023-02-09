import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UcesnikService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  ime: string;
  prezime: string;
  username: string;
  telefon: string;
  mejl: string;
  tip: string;
  slika: string;

  updateProfile(ime, prezime, korisnickoIme, kontaktTelefon,
    imejl, slika){
    const data={
      ime: ime,
      prezime: prezime,
      username: korisnickoIme,
      telefon: kontaktTelefon,
      mejl: imejl,
      slika: slika
    }

    return this.http.post(`${this.uri}/users/update`, data);
  }
  getSveAktuelneRadionice() {
    const data={
      datumDanasnji: new Date()
    }
    return this.http.post(`${this.uri}/radionica/getSveAktuelneRadionice`,data);
  }

  getRadionicaByName(naziv){
    const data={
      naziv: naziv
    }
    return this.http.post(`${this.uri}/radionica/getRadionicaByName`, data);
  }

  addComment(komentar, idRadionice,username) {
    const data={
      komentar: komentar,
      username: username,
      idRadionice: idRadionice
    }
    return this.http.post(`${this.uri}/radionica/addComment`, data);
  }

  getComments(idRadionice) {
    const data={
      idRadionice: idRadionice
    }
    return this.http.post(`${this.uri}/radionica/getComments`, data);
  }

  checkAkc(username, idRadionice) {
    const data={
      username: username,
      idRadionice: idRadionice
    }
    return this.http.post(`${this.uri}/radionicaAkcije/checkAkc`, data);
  }

  likeChange (username, idRadionice, like) {
    const data={
      username: username,
      idRadionice: idRadionice,
      like: like
    }

    return this.http.post(`${this.uri}/radionicaAkcije/likeChange`, data);
  }

  addAkc (username, idRadionice) {
    const data={
      username: username,
      idRadionice: idRadionice
    }

    return this.http.post(`${this.uri}/radionicaAkcije/addAkc`, data);
  }

  join(username, idRadionice) {
    const data={
      username: username,
      idRadionice: idRadionice
    }

    return this.http.post(`${this.uri}/radionicaAkcije/join`, data);
  }

  decNumberMesta(idRadionice, numberMesta) {
    const data={
      idRadionice: idRadionice,
      preostaloMesta: numberMesta
    }
    return this.http.post(`${this.uri}/radionica/decNumberMesta`, data);
  }

}
