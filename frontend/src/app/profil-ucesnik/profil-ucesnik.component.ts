import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UcesnikService } from '../servisi/ucesnik.service';

@Component({
  selector: 'app-profil-ucesnik',
  templateUrl: './profil-ucesnik.component.html',
  styleUrls: ['./profil-ucesnik.component.css']
})
export class ProfilUcesnikComponent implements OnInit {

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

    if(/^[A-Z]{1}/.test(this.ime) == false) {
      this.porukaGreska.push("Ime nije u ispravnom formatu.")
    }

    if(/^[A-Z]{1}/.test(this.prezime) == false) {
      this.porukaGreska.push("Prezime nije u ispravnom formatu.")
    }

    if(/\d\d\d\d\d\d\d\d\d/.test((String)(this.telefon)) == false) {
      this.porukaGreska.push("Telefonski broj nije u ispravnom formatu.")
    }

    if(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/.test((String)(this.mejl)) == false) {
      this.porukaGreska.push("Email nije u ispravnom formatu.")
    }
    if (this.porukaGreska.length == 0) {
      if (this.ime == null) this.ime = this.korisnik.ime; else this.korisnik.ime = this.ime;
      if (this.prezime == null) this.prezime = this.korisnik.prezime; else this.korisnik.prezime = this.prezime;
      if (this.telefon == null) this.telefon = this.korisnik.telefon; else this.korisnik.telefon = this.telefon;
      if (this.mejl == null) this.mejl = this.korisnik.mejl; else this.korisnik.mejl = this.mejl;

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
  // filtriraj(){
  //   this.listaNekretnina = [];
  //   this.porukaOgreski = [];
  //   if(this.tipNekretnine == undefined){
  //     this.tipNekretnine = "";
  //     this.porukaOgreski.push("Niste izabrali tip nekretnine.")
  //   } else {

  //     this.ucesnikService.filtrirajNekretnine(this.tipNekretnine, this.grad, this.opstina, this.mikrolokacija, this.cenaDO,
  //       this.kvadraturaOD, this.brojSoba).subscribe((lista: Nekretnina[])=>{
  //         this.listaNekretnina = lista;
  //         for (let index = 0; index < this.listaNekretnina.length; index++) {
  //           let lokalnaListaNekretnina = this.listaNekretnina.filter
  //           (nekretnina=>nekretnina.grad.includes(this.listaNekretnina[index].grad)&&nekretnina.opstina.includes(this.listaNekretnina[index].opstina)
  //           &&nekretnina.mikrolokacija.includes(this.listaNekretnina[index].mikrolokacija)&&nekretnina.tipNekretnine.includes(this.listaNekretnina[index].tipNekretnine));
  //           let cnt = 0;
  //           let ukupnaCena = 0;
  //           for (let index2 = 0; index2 < lokalnaListaNekretnina.length; index2++) {
  //             ukupnaCena += lokalnaListaNekretnina[index2].cena/lokalnaListaNekretnina[index2].kvadratura;
  //               cnt += 1;
  //           }
  //           this.listaNekretnina[index].prosecna = ukupnaCena/cnt;
  //         }
  //         sessionStorage.setItem("listaNekretnina", JSON.stringify(this.listaNekretnina));
  //         this.tipNekretnine = undefined;
  //         this.grad  = undefined;
  //         this.opstina  = undefined;
  //         this.mikrolokacija = undefined;
  //         this.cenaDO = undefined;
  //         this.kvadraturaOD = undefined;
  //         this.brojSoba = undefined;
  //       })

  //   }
  // }
}
