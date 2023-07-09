import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UcesnikService } from '../servisi/ucesnik.service';

@Component({
  selector: 'app-agencija',
  templateUrl: './agencija.component.html',
  styleUrls: ['./agencija.component.css']
})
export class AgencijaComponent implements OnInit {

  constructor(private router: Router, private ucesnikService: UcesnikService) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem("user"));
    this.flagZaIzmenu = 0;
  }

  odjaviSe(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
  change() {
    this.flagZaIzmenu = 1;

  }
  cancel() {
  this.flagZaIzmenu = 0;
  }

  korisnik:User;
  // 0 je za samo prikaz informacija a 1 je za izmenu
  flagZaIzmenu: number=0;
  porukaOgreski: string[] = [];
  p:any;
  ime: string;
  prezime: string;
  username: string;
  password: string;
  passwordPotvrda: string;
  telefon: string;
  mejl: string;
  slika: string;
  porukaGreska: string[] = [];


  updejtuj() {
      if (this.ime == null) this.ime = this.korisnik.ime; else this.korisnik.ime = this.ime;
      if (this.prezime == null) this.prezime = this.korisnik.prezime; else this.korisnik.prezime = this.prezime;
      if (this.telefon == null) this.telefon = this.korisnik.telefon; else this.korisnik.telefon = this.telefon;
      if (this.mejl == null) this.mejl = this.korisnik.mejl; else this.korisnik.mejl = this.mejl;

      if (this.porukaGreska.length == 0) {
        this.ucesnikService.updateProfile(this.ime, this.prezime, this.korisnik.username,  this.telefon, this.mejl,this.slika).subscribe((resp)=>{
          if(resp['message']=='user updated'){
            localStorage.setItem('user',JSON.stringify(this.korisnik));
            this.cancel();
            this.router.navigate(['/profilUcesnik']);
          }else{
            this.porukaGreska.push(resp['message']);
          }
      })
    }
  }
}
