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
}
