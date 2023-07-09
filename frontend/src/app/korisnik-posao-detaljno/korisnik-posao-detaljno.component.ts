import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Objekat } from '../models/objekat.model';
import { Posao } from '../models/posao.model';
import { User } from '../models/user.model';
import { Poruka } from '../models/komentari.model';

import { ObjectsService } from '../servisi/objects.service';
import { UsersService } from '../servisi/users.service';

@Component({
  selector: 'app-korisnik-posao-detaljno',
  templateUrl: './korisnik-posao-detaljno.component.html',
  styleUrls: ['./korisnik-posao-detaljno.component.css']
})
export class KorisnikPosaoDetaljnoComponent implements OnInit {


  selectedObjekat: Objekat;
  objekatForm: FormGroup;

  objekat: Objekat;
  porukaGreska: any;
  datumEnd: string;
  agencija: string;
  korisnik: User;
  constructor(private formBuilder: FormBuilder, private router: Router, private objectService: ObjectsService,
    private usersServise: UsersService) { }
  tip: string;
  adresa: string;
  kvadratura: string;
  brojProstorija: string;
  showCanvasSection: boolean = true;
  objects: Objekat[];
  komentar: Poruka[] = [];
  isCommIn = 0;
  poruka: Poruka;
  // tipForumlara:string = '';
  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('user'));
    this.myPosao = JSON.parse(localStorage.getItem('myPosao'));
    console.log(this.myPosao.agencija)

    this.usersServise.getComments(this.myPosao.agencija).subscribe((resp: User)=>{
      console.log(1)
      if (resp != null) {
        console.log(resp.komentari)
        let i = 0;
        for (let komentar of resp.komentari) {
          if (komentar.from === this.korisnik.username) {
            this.komentar[i++] = komentar;
            this.poruka = komentar;
          }
        }
        console.log(this.komentar)

      }
      if (this.komentar.length>0) this.isCommIn = 1;
    })
    this.objectService.getObjects(this.korisnik).subscribe({
      next: (objects: Objekat[]) => {
        if (objects != null) {
          this.objects = objects;
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
    this.objekatForm = this.formBuilder.group({
      novac: [''],
      status: ['', Validators.required],
      ocena: [''],
      komentar: ['']
    });

  }
  myPosao: Posao;

  onSubmit(): void {
    if (this.objekatForm.value.status == 'Odbijeno') {
      this.myPosao.statusOfAcceptance = '0';
      this.myPosao.agencija = this.myPosao.agencija + '*odbijeno*'
    }
    else  if (this.objekatForm.value.status == 'Odobreno') {
      this.myPosao.statusOfAcceptance = '3';
      this.myPosao.novac = '0';
    }
    console.log(this.myPosao.agencija);

    this.objectService.updatePosao(this.myPosao).subscribe((resp)=>{
        console.log(resp['message']);
   });
   if (this.objekatForm.value.status == 'Odbijeno') {

  }

 }
 noviKomentar: Poruka;
 ocena: string;
 komentarText:string;
 addComment() {
  if(this.objekatForm.value.komentar != null) {
    console.log(this.objekatForm.value.komentar)
    let dt = new Date();
    this.noviKomentar = {
      slika:this.korisnik.slika,
      ocena: this.ocena,
      privateChat: false,
      datum: dt.toString(),
      from: this.korisnik.username,
      text: this.komentarText,
      to: null
    };
  this.usersServise.addComment(this.noviKomentar, this.myPosao.agencija).subscribe((resp)=>{
     window.location.reload();
 })
}
}

odjaviSe(){
  localStorage.clear();
  this.router.navigate(['/']);
}
}
