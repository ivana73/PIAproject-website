import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Radionica } from '../models/radionica.model';
import { User } from '../models/user.model';
import { UcesnikService } from '../servisi/ucesnik.service';

@Component({
  selector: 'app-neregistrovani-user',
  templateUrl: './neregistrovani-user.component.html',
  styleUrls: ['./neregistrovani-user.component.css']
})
export class NeregistrovaniUserComponent implements OnInit {

  constructor(private router: Router, private ucesnikService: UcesnikService) { }

  ngOnInit(): void {

    this.ucesnikService.getSveAktuelneRadionice().subscribe((radionica: Radionica[]) => {
        if (radionica) {
          this.radionice = radionica;
        }
        let j = 0;
        for ( let i=0;i<this.radionice.length ;i++) {
          const [day,month, year] = this.radionice[i].datum.split('/');
          const date = new Date(+year, +month - 1, +day);
          if (date >= this.dateNow) {
            this.aktuelneRadionice[j++] = this.radionice[i];
          }
        }
        this.sveaktuelneRadionice = this.aktuelneRadionice;

    });
  }
  dateNow = new Date();
  fromDb = undefined;
  radionice: Radionica[];
  aktuelneRadionice: Radionica[]= this.fromDb || [];
  sveaktuelneRadionice: Radionica[]= this.fromDb || [];
  newaktuelneRadionice: Radionica[]= this.fromDb || [];
  p:any;
  poImenu: string;
  poMestu: string;

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
      const [ daya,montha, yeara] = a.datum.split('/');
      const datea = new Date(+yeara, +montha - 1, +daya);

      const [ dayb, monthb, yearb] = b.datum.split('/');
      const dateb = new Date(+yearb, +monthb - 1, +dayb);

      if (datea < dateb)
      return -1;
      if (datea == dateb)
      return 0;
      (datea > dateb)
      return 1;
    });
  }

  searchRadionice() {

    let type=0;
    if (this.poMestu != null) type = 1; {
      if (this.poImenu != null) type = 3;
    }
    if (this.poImenu != null) type = 2;
    console.log(this.poImenu + " " + this.poMestu + " " + type)
    if (type != 0) {
      let j = 0;
      for ( let i=0;i<this.sveaktuelneRadionice.length ;i++) {
          if (type == 1) {
              if (this.sveaktuelneRadionice[i].mesto == this.poMestu) {
                this.newaktuelneRadionice[j++] = this.sveaktuelneRadionice[i];
              }

          }
          if (type == 2) {
            if (this.sveaktuelneRadionice[i].naziv == this.poImenu ) {
              this.newaktuelneRadionice[j++] = this.sveaktuelneRadionice[i];
            }
          }
          if (type == 3) {
            if (this.sveaktuelneRadionice[i].mesto == this.poMestu && this.sveaktuelneRadionice[i].naziv == this.poImenu ) {
              this.newaktuelneRadionice[j++] = this.sveaktuelneRadionice[i];
            }
          }

      }
      this.aktuelneRadionice = this.newaktuelneRadionice;
    }
    else {
      this.aktuelneRadionice = this.sveaktuelneRadionice;
    }
    this.poImenu =null;
    this.poMestu = null;
  }
}
