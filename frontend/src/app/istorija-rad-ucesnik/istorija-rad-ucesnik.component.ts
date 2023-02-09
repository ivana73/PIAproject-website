import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Radionica } from '../models/radionica.model';
import { User } from '../models/user.model';
import { UcesnikService } from '../servisi/ucesnik.service';

@Component({
  selector: 'app-istorija-rad-ucesnik',
  templateUrl: './istorija-rad-ucesnik.component.html',
  styleUrls: ['./istorija-rad-ucesnik.component.css']
})
export class IstorijaRadUcesnikComponent implements OnInit {

  constructor(private router: Router, private ucesnikService: UcesnikService) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem("user"));

    let j = 0;
    for ( let i=0;i<this.korisnik.prijavljeneRadionice.length ;i++) {
      console.log(this.korisnik.prijavljeneRadionice[i]);
      this.ucesnikService.getRadionicaByName(this.korisnik.prijavljeneRadionice[i]).subscribe((radionica: Radionica) => {
        if (radionica) {
          const [month, day, year] = radionica.datum.split('/');
          const date = new Date(+year, +month - 1, +day);
          if (date < this.dateNow) {
            this.radionice[j++] = radionica;
          }

        }
    });
    }
  }
  fromDb = undefined;
  korisnik: User;
  radionice: Radionica[] = this.fromDb || [];
  p:any;
  dateNow = new Date();

  odjaviSe(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
  sortName(): Radionica[] {
    return this.radionice.sort((a,b)=>{
      if (a.naziv < b.naziv) {
        return -1;
      }
      if (a.naziv > b.naziv) {
        return 1;
      }
      return 0;
      });
  }
  sortPlace(): Radionica[]  {
    return this.radionice.sort((a,b)=>{
      if (a.mesto < b.mesto) {
        return -1;
      }
      if (a.mesto > b.mesto) {
        return 1;
      }
      return 0;
      });
  }

  sortAbout(): Radionica[]  {
    return this.radionice.sort((a,b)=>{
      if (a.opis < b.opis) {
        return -1;
      }
      if (a.opis > b.opis) {
        return 1;
      }
      return 0;
      });
  }

  sortMore(): Radionica[]  {
    return this.radionice.sort((a,b)=>{
      if (a.detaljnije < b.detaljnije) {
        return -1;
      }
      if (a.detaljnije > b.detaljnije) {
        return 1;
      }
      return 0;
      });
  }

  sortDate(): Radionica[] {
    return this.radionice.sort((a,b)=>{
      const [montha, daya, yeara] = a.datum.split('/');
      const datea = new Date(+yeara, +montha - 1, +daya);

      const [monthb, dayb, yearb] = b.datum.split('/');
      const dateb = new Date(+yearb, +monthb - 1, +dayb);

      if (datea < dateb)
      return -1;
      if (datea == dateb)
      return 0;
      (datea > dateb)
      return 1;
    });
  }

  istorijaRadionica() {

  }

}
