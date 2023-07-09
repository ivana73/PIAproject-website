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
  agencije:User[] = []

  ngOnInit(): void {
    this.ucesnikService.getSveAgencije().subscribe((agencije: User[])=>{
      if(agencije){
        this.agencije = agencije;
      }
    })
    // this.ucesnikService.getSveAktuelneRadionice().subscribe((radionica: Radionica[]) => {
    //     if (radionica) {
    //       this.radionice = radionica;
    //     }
    //     let j = 0;
    //     for ( let i=0;i<this.radionice.length ;i++) {
    //       const [day,month, year] = this.radionice[i].datum.split('/');
    //       const date = new Date(+year, +month - 1, +day);
    //       if (date >= this.dateNow) {
    //         this.aktuelneRadionice[j++] = this.radionice[i];
    //       }
    //     }
    //     this.sveaktuelneRadionice = this.aktuelneRadionice;

    // });
  }
  dateNow = new Date();
  fromDb = undefined;
  // aktuelneRadionice: Radionica[]= this.fromDb || [];
  // sveaktuelneRadionice: Radionica[]= this.fromDb || [];
  // newaktuelneRadionice: Radionica[]= this.fromDb || [];
  p:any;
  poImenu: string;
  poMestu: string;


  udjiUradionicu(radionicePrijavljene: User) {
    sessionStorage.setItem("agencija", JSON.stringify(radionicePrijavljene));
    console.log(radionicePrijavljene);
    this.router.navigate(['/radionicaDetails']);
  }

  sortNameWay:number = 1;
  sortAddressWay:number = 1;

  sortName(): void {
    if (this.sortNameWay == 1) {
      this.sortNameWay = 2;
      this.agencije = this.agencije.sort((a, b) => {
        if (a.nazivOrganizacije < b.nazivOrganizacije) {
          return -1;
        }
        if (a.nazivOrganizacije > b.nazivOrganizacije) {
          return 1;
        }
        return 0;
      });
    }
    else {
      this.sortNameWay = 1;
      this.agencije = this.agencije.sort((a, b) => {
        if (a.nazivOrganizacije > b.nazivOrganizacije) {
          return -1;
        }
        if (a.nazivOrganizacije < b.nazivOrganizacije) {
          return 1;
        }
        return 0;
      });
    }
  }

  sortPlace(): void {
    if (this.sortAddressWay == 1) {
      this.sortAddressWay = 2;
      this.agencije = this.agencije.sort((a, b) => {
        if (a.adresaSedistaOrg < b.adresaSedistaOrg) {
          return -1;
        }
        if (a.adresaSedistaOrg > b.adresaSedistaOrg) {
          return 1;
        }
        return 0;
      });
    }
    else {
      this.sortAddressWay = 1;
      this.agencije = this.agencije.sort((a, b) => {
        if (a.adresaSedistaOrg > b.adresaSedistaOrg) {
          return -1;
        }
        if (a.adresaSedistaOrg < b.adresaSedistaOrg) {
          return 1;
        }
        return 0;
      });
    }
  }


  // sortAbout(): Radionica[]  {
  //   return this.radionice.sort((a,b)=>{
  //     if (a.opis < b.opis) {
  //       return -1;
  //     }
  //     if (a.opis > b.opis) {
  //       return 1;
  //     }
  //     return 0;
  //     });
  // }

  // sortMore(): Radionica[]  {
  //   return this.radionice.sort((a,b)=>{
  //     if (a.detaljnije < b.detaljnije) {
  //       return -1;
  //     }
  //     if (a.detaljnije > b.detaljnije) {
  //       return 1;
  //     }
  //     return 0;
  //     });
  // }

  // sortDate(): Radionica[] {
  //   return this.radionice.sort((a,b)=>{
  //     const [ daya,montha, yeara] = a.datum.split('/');
  //     const datea = new Date(+yeara, +montha - 1, +daya);

  //     const [ dayb, monthb, yearb] = b.datum.split('/');
  //     const dateb = new Date(+yearb, +monthb - 1, +dayb);

  //     if (datea < dateb)
  //     return -1;
  //     if (datea == dateb)
  //     return 0;
  //     (datea > dateb)
  //     return 1;
  //   });
  // }

  searchRadionice() {
    let type = 0;
    if (this.poMestu != null) {
      type = 1;
      if (this.poImenu != null) type = 3;
    } else {
      if (this.poImenu != null) type = 2;
    }

    console.log(this.poImenu + " " + this.poMestu + " " + type);
    if (type != 0) {
      let j = 0;
      for (let i = 0; i < this.agencije.length; i++) {
        if (type == 1) {
          if (this.agencije[i].adresaSedistaOrg == this.poMestu) {
            this.agencije[j++] = this.agencije[i];
          }
        }
        if (type == 2) {
          if (this.agencije[i].nazivOrganizacije == this.poImenu) {
            this.agencije[j++] = this.agencije[i];
          }
        }
        if (type == 3) {
          if (
            this.agencije[i].adresaSedistaOrg == this.poMestu &&
            this.agencije[i].nazivOrganizacije == this.poImenu
          ) {
            this.agencije[j++] = this.agencije[i];
          }
        }
      }
      this.agencije = this.agencije.slice(0, j);
    } else {
      this.agencije = this.agencije;
      window.location.reload();
    }

    this.poImenu = null;
    this.poMestu = null;
    // window.location.reload();
  }


}
