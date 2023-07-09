import { Component, Input, OnInit, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { Poruka } from '../models/komentari.model';
import { Radionica } from '../models/radionica.model';
import { RadionicaAkcije } from '../models/radionicaAkcije.model';
import { User } from '../models/user.model';
import { UcesnikService } from '../servisi/ucesnik.service';
import { UsersService } from '../servisi/users.service';

@Component({
  selector: 'app-radionice-details',
  templateUrl: './radionice-details.component.html',
  styleUrls: ['./radionice-details.component.css']
})
export class RadioniceDetailsComponent implements OnInit {

  constructor(private router: Router, private usersServise: UsersService) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem("user"));
    this.radionica = JSON.parse(sessionStorage.getItem("agencija"));
    this.usersServise.getComments(this.radionica).subscribe((resp: User)=>{
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
}
