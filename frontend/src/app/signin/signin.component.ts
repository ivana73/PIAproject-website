import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../servisi/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  protected aFormGroup: FormGroup;
  constructor(private registracijaServis: UsersService, private formBuilder: FormBuilder,
     private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.porukaGreska = [];

  }


  syteKey: string;
  ime: string;
  prezime: string;
  username: string;
  password: string;
  passwordPotvrda: string;
  telefon: string;
  mejl: string;
  tip: string;
  tipOrganizator: string;
  nazivOrganizacije: string;
  adresaSedistaOrg: string;
  matBrOrg: number;
  odobren: number;
  slika: string;
  porukaGreska: string[] = [];

  porukaSlika:string;


  register(){
    this.porukaGreska = [];

      if(this.ime == undefined || this.prezime == undefined || this.username == undefined || this.password == undefined
        || this.passwordPotvrda == undefined || this.mejl == undefined || this.tip == undefined){

          this.porukaGreska.push("Niste uneli sva polja.")

        } else{

          if(/^[A-Z]{1}/.test(this.ime) == false) {
            this.porukaGreska.push("Ime nije u ispravnom formatu.")
          }

          if(/^[A-Z]{1}/.test(this.prezime) == false) {
            this.porukaGreska.push("Prezime nije u ispravnom formatu.")
          }

          if(/^[a-zA-Z]{1}/.test(this.password) == false) {
            this.porukaGreska.push("Lozinka treba da pocinje slovom.")
          }
          if(this.password.length < 8) {
            this.porukaGreska.push("Lozinka treba da ima minimalno 8 karaktera.")
          }
          if(/[A-Z]/.test(this.password) == false) {
            this.porukaGreska.push("Lozinka treba da ima minimalno 1 veliko slovo.")
          }
          if(/[0-9]/.test(this.password) == false) {
            this.porukaGreska.push("Lozinka treba da ima minimalno 1 veliko slovo.")
          }
          if(/[!@#\$%\^&\*\(\)_\+\-=]/.test(this.password) == false) {
            this.porukaGreska.push("Lozinka treba da ima minimalno 1 specijalni karakter.")
          }

          if(this.password != this.passwordPotvrda){
            this.porukaGreska.push("Lozinka i potvrda lozinke se ne slazu.")
          }

          if(/\d\d\d\d\d\d\d\d\d/.test((String)(this.telefon)) == false) {
            this.porukaGreska.push("Telefonski broj nije u ispravnom formatu.")
          }

          if(/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/.test((String)(this.mejl)) == false) {
            this.porukaGreska.push("Email nije u ispravnom formatu.")
          }
          if(this.porukaGreska.length == 0) {

            this.registracijaServis.registerUser(this.ime, this.prezime, this.username,
              this.password, this.passwordPotvrda, this.telefon,
              this.mejl, this.tip, this.nazivOrganizacije, this.adresaSedistaOrg, this.matBrOrg, this.odobren, this.slika).subscribe((resp)=>{
               if(resp['message']=='user added'){
                localStorage.setItem('user',JSON.stringify(this));
                 this.router.navigate(['/user']);
               }else{
                this.porukaGreska.push(resp['message']);
               }
           })
          }

        }


  }

  uspesno:number=0;

  handleCaptchaClicked($event){

    this.uspesno = 1;

  }

}
