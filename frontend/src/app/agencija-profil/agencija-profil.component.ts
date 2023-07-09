import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UcesnikService } from '../servisi/ucesnik.service';
import { UsersService } from '../servisi/users.service';

@Component({
  selector: 'app-agencija-profil',
  templateUrl: './agencija-profil.component.html',
  styleUrls: ['./agencija-profil.component.css']
})
export class AgencijaProfilComponent implements OnInit {

  constructor(private router: Router, private ucesnikService: UcesnikService, private userService: UsersService) { }
  serverImageUrl: string;
  defaultProfileImage: string = 'assets/profile.jpg';
  korisnik:User;

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem("user"));
    this.flagZaIzmenu = 0;
    console.log(this.korisnik.slika)
    if (this.korisnik.slika!= null) this.defaultProfileImage = this.korisnik.slika;

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
  imagePreview: string;


  updejtuj() {
      if (this.ime == null) this.ime = this.korisnik.ime; else this.korisnik.ime = this.ime;
      if (this.prezime == null) this.prezime = this.korisnik.prezime; else this.korisnik.prezime = this.prezime;
      if (this.telefon == null) this.telefon = this.korisnik.telefon; else this.korisnik.telefon = this.telefon;
      if (this.mejl == null) this.mejl = this.korisnik.mejl; else this.korisnik.mejl = this.mejl;
      // if(/^[A-Z]{1}/.test(this.ime) == false) {
      //   this.porukaGreska.push("Ime nije u ispravnom formatu.")
      // }

      // if(/^[A-Z]{1}/.test(this.prezime) == false) {
      //   this.porukaGreska.push("Prezime nije u ispravnom formatu.")
      // }

      // if(/\d\d\d\d\d\d\d\d\d/.test((String)(this.telefon)) == false) {
      //   this.porukaGreska.push("Telefonski broj nije u ispravnom formatu.")
      // }

      // if(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/.test((String)(this.mejl)) == false) {
      //   this.porukaGreska.push("Email nije u ispravnom formatu.")
      // }
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

  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  errorMessage: string;


  changePassword() {
    // Provera da li je stara lozinka ispravna
    if (!this.checkOldPassword()) {
      this.errorMessage = 'Uneta stara lozinka nije ispravna.';
      return;
    }

    // Provera da li su nova lozinka i potvrda lozinke iste
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Nova lozinka i potvrda lozinke se ne podudaraju.';
      return;
    }

    // Provera formata nove lozinke (npr. minimalna dužina, specijalni karakteri, brojevi, slova, itd.)
    if (!this.validatePasswordFormat(this.newPassword)) {
      this.errorMessage = 'Nova lozinka nije u traženom formatu.';
      return;
    }

    this.userService.changePassword(this.korisnik.username, this.newPassword).subscribe((resp)=>{
       if(resp['message']=='user added'){
        // localStorage.setItem('user',JSON.stringify(this));
        this.router.navigate(['']);
       }else{
        this.porukaGreska.push(resp['message']);
       }
   })

    this.odjaviSe();

  }

  checkOldPassword(): boolean {
    return this.korisnik.password === this.oldPassword;
  }

  validatePasswordFormat(password: string): boolean {
    if(/^[a-zA-Z]{1}/.test(this.newPassword) == false) {
      return false;
    }
    if(this.newPassword.length < 8) {
      return false;
    }
    if(/[A-Z]/.test(this.newPassword) == false) {
      return false;
    }
    if(/[!@#\$%\^&\*\(\)_\+\-=]/.test(this.newPassword) == false) {
      return false;
    }

    if(this.newPassword != this.confirmPassword){
      return false;
    }

    return true;
  }
}
