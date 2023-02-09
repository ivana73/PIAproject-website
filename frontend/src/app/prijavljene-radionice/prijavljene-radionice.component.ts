import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Radionica } from '../models/radionica.model';
import { RadionicaAkcije } from '../models/radionicaAkcije.model';
import { User } from '../models/user.model';
import { UcesnikService } from '../servisi/ucesnik.service';

@Component({
  selector: 'app-prijavljene-radionice',
  templateUrl: './prijavljene-radionice.component.html',
  styleUrls: ['./prijavljene-radionice.component.css']
})
export class PrijavljeneRadioniceComponent implements OnInit {

  constructor(private router: Router, private ucesnikService: UcesnikService) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem("user"));
    this.ucesnikService.findAllRA4user(this.korisnik.username).subscribe((resp: RadionicaAkcije[])=>{
      if (resp) {
        this.radioniceAkc = resp;
        let j=0;
        for (let i=0;i<this.radioniceAkc.length; i++) {
            this.ucesnikService.getRadionicaById(this.radioniceAkc[i].radionica).subscribe((resp: Radionica)=>{
              if (resp) {
                this.radionicePrijavljene[j++] = resp;
              }
            });
        }
      }
    });
  }
  dateNow = new Date();
  fromDb = undefined;
  korisnik: User;
  radionicePrijavljene: Radionica[]= this.fromDb || [];
  radioniceAkc: RadionicaAkcije[]= this.fromDb || [];
  aktuelneRadionice: Radionica[]= this.fromDb || [];
  p:any;

  odjaviSe(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

  udjiUradionicu(radionicePrijavljene) {
    sessionStorage.setItem("radionica", JSON.stringify(radionicePrijavljene));
    this.router.navigate(['/radionicaDetails']);
  }
}
