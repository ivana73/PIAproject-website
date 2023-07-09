import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  ime: string;
  prezime: string;
  username: string;
  password: string;
  passwordPotvrda: string;
  telefon: string;
  mejl: string;
  tip: string;
  nazivOrganizacije: string;
  adresaSedistaOrg: string;
  matBrOrg: number;
  odobren: number;
  slika: string;
  kratakOpis: string;

  registerUser(ime, prezime, korisnickoIme, lozinka, potvrdaLozinke, kontaktTelefon,
    imejl, tipKorisnika, nazivOrganizacije, adresaSedistaOrg, matBrOrg, odobren, slika, kratakOpis){
    const data={
      ime: ime,
      prezime: prezime,
      username: korisnickoIme,
      password: lozinka,
      passwordPotvrda: potvrdaLozinke,
      telefon: kontaktTelefon,
      mejl: imejl,
      tip: tipKorisnika,
      nazivOrganizacije: nazivOrganizacije,
      adresaSedistaOrg: adresaSedistaOrg,
      matBrOrg: matBrOrg,
      odobren: odobren,
      slika: slika,
      kratakOpis: kratakOpis
    }

    return this.http.post(`${this.uri}/users/register`, data);
  }

  login(username, password){
    const data = {
      username: username,
      password: password
    }

    return this.http.post(`${this.uri}/login`, data);
  }
  addComment(komentar, idRadionice) {
    const data={
      komentar: komentar,
      idRadionice: idRadionice
    }
    return this.http.post(`${this.uri}/users/addComment`, data);
  }

  getComments(idRadionice) {
    const data={
      idRadionice: idRadionice
    }
    return this.http.post(`${this.uri}/users/getComments`, data);
  }

  changePassword(username, password) {
    const data={
      username: username,
      password:password
    }
    return this.http.post(`${this.uri}/users/changePassword`, data);
  }
}
