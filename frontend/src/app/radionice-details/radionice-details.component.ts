import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poruka } from '../models/komentari.model';
import { Radionica } from '../models/radionica.model';
import { RadionicaAkcije } from '../models/radionicaAkcije.model';
import { User } from '../models/user.model';
import { UcesnikService } from '../servisi/ucesnik.service';

@Component({
  selector: 'app-radionice-details',
  templateUrl: './radionice-details.component.html',
  styleUrls: ['./radionice-details.component.css']
})
export class RadioniceDetailsComponent implements OnInit {

  constructor(private router: Router, private ucesnikService: UcesnikService) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem("user"));
    this.radionica = JSON.parse(sessionStorage.getItem("radionica"));
    this.ucesnikService.getComments(this.radionica).subscribe((resp: Radionica)=>{
      if (resp != null) {
        this.comments = resp.komentari;
      }
    })
    this.ucesnikService.checkAkc(this.korisnik.username, this.radionica).subscribe((resp: RadionicaAkcije)=>{
        this.toggle = resp.lajkovi;
    })
    }
  @Input() radionica: Radionica;
  fromDb = undefined;
  korisnik: User;
  radionice: Radionica[] = this.fromDb || [];
  p:any;
  komentar: string;
  radionicaKom: Radionica[] ;
  comments: Poruka[] = this.fromDb || [];
  toggle: boolean;
  odjaviSe(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  addComment() {
    if(this.komentar != null) {
    this.ucesnikService.addComment(this.komentar, this.radionica, this.korisnik.username).subscribe((resp)=>{
       window.location.reload();
   })
  }
  }

  like() {
    let lajkovi;
    this.ucesnikService.checkAkc(this.korisnik.username, this.radionica).subscribe((resp: RadionicaAkcije)=>{
        if (resp == null) {
          this.ucesnikService.addAkc(this.korisnik.username, this.radionica).subscribe((resp: RadionicaAkcije)=>{
            lajkovi = !resp.lajkovi;
          })
        }
        else lajkovi = !resp.lajkovi;
        this.ucesnikService.likeChange(this.korisnik.username, this.radionica, lajkovi).subscribe((resp: RadionicaAkcije)=>{
          this.toggle = !this.toggle;
          })

    })
  }
}
