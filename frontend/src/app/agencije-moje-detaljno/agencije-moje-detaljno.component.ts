import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poruka } from '../models/komentari.model';
import { User } from '../models/user.model';
import { UcesnikService } from '../servisi/ucesnik.service';
import { UsersService } from '../servisi/users.service';

@Component({
  selector: 'app-agencije-moje-detaljno',
  templateUrl: './agencije-moje-detaljno.component.html',
  styleUrls: ['./agencije-moje-detaljno.component.css']
})
export class AgencijeMojeDetaljnoComponent implements OnInit {


  constructor(private router: Router, private ucesnikService: UcesnikService, private usersServise: UsersService) { }


  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem("user"));
    this.radionica = JSON.parse(sessionStorage.getItem("agencija"));
    this.usersServise.getComments(this.radionica.username).subscribe((resp: User)=>{
      console.log(1)
      if (resp != null) {
        console.log(resp.komentari)
        this.comments = resp.komentari;
      }
    })
    // this.ucesnikService.checkAkc(this.korisnik.username, this.radionica).subscribe((resp: RadionicaAkcije)=>{
    //   if (resp) {
    //     this.toggle = resp.lajkovi;
    //     // if (resp.prijavljen == true) this.joinBtnVal = 'Prijavljeni ste';
    //   }

    // })
    }
  @Input() radionica: User;
  fromDb = undefined;
  korisnik: User;
  p:any;
  ocena: string;
  komentar: string;
  comments: Poruka[] = this.fromDb || [];
  comment: Poruka;
  toggle: boolean =false;
  joinBtnVal: string =  "Prijavi se"
  odjaviSe(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  addComment() {
    if(this.komentar != null) {
      console.log(this.komentar)
      let dt = new Date();
      this.comment = {
        slika:this.korisnik.slika,
        ocena: this.ocena,
        privateChat: false,
        datum: dt.toString(),
        from: this.korisnik.username,
        text: this.komentar,
        to: null
      };
    this.usersServise.addComment(this.comment, this.radionica).subscribe((resp)=>{
       window.location.reload();
   })
  }
  }

}

